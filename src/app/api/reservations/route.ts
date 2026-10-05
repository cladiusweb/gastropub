import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Reservation from "@/models/Reservation";

// In-memory fallback cache for serverless runtime when MONGODB_URI is not provided
interface StoredReservation {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
  seatingPreference?: string;
  status: string;
  confirmationCode: string;
  createdAt: string;
}

declare global {
  // eslint-disable-next-line no-var
  var mockReservationsStore: StoredReservation[] | undefined;
}

const mockStore: StoredReservation[] = global.mockReservationsStore || [];
if (!global.mockReservationsStore) {
  global.mockReservationsStore = mockStore;
}

function generateConfirmationCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let randomPart = "";
  for (let i = 0; i < 4; i++) {
    randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `GP-98-${randomPart}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, date, time, guests, specialRequests, seatingPreference } = body;

    // 1. Validation Logic
    if (!fullName || fullName.trim().length < 3) {
      return NextResponse.json(
        { success: false, message: "Lütfen en az 3 karakterden oluşan geçerli bir ad soyad giriniz." },
        { status: 400 }
      );
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Lütfen geçerli bir e-posta adresi giriniz." },
        { status: 400 }
      );
    }

    if (!phone || phone.trim().length < 7) {
      return NextResponse.json(
        { success: false, message: "Lütfen geçerli bir telefon numarası giriniz." },
        { status: 400 }
      );
    }

    if (!date) {
      return NextResponse.json(
        { success: false, message: "Lütfen bir rezervasyon tarihi seçiniz." },
        { status: 400 }
      );
    }

    const validTimes = [
      "19:00",
      "19:30",
      "20:00",
      "20:30",
      "21:00",
      "21:30",
      "22:00",
      "22:30",
      "23:00",
    ];

    if (!time || !validTimes.includes(time)) {
      return NextResponse.json(
        {
          success: false,
          message: "Rezervasyon saatlerimiz 19:00 ile 23:00 arasında, 30 dakikalık aralıklarla hizmet vermektedir.",
        },
        { status: 400 }
      );
    }

    const guestCount = Number(guests);
    if (!guestCount || guestCount < 1 || guestCount > 12) {
      return NextResponse.json(
        { success: false, message: "Masa rezervasyonu 1 ile 12 kişi arasında kabul edilmektedir." },
        { status: 400 }
      );
    }

    const confirmationCode = generateConfirmationCode();

    // 2. Persist to MongoDB if available
    const db = await connectToDatabase();

    if (db) {
      try {
        const newReservation = await Reservation.create({
          fullName: fullName.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          date,
          time,
          guests: guestCount,
          specialRequests: specialRequests ? specialRequests.trim() : "",
          seatingPreference: seatingPreference || "main_hall",
          status: "confirmed",
          confirmationCode,
        });

        return NextResponse.json(
          {
            success: true,
            storage: "mongodb",
            message: "Rezervasyonunuz başarıyla oluşturuldu ve şefimizin masasına iletildi.",
            data: newReservation,
          },
          { status: 201 }
        );
      } catch (dbErr) {
        console.warn("MongoDB create error, falling back to memory store:", dbErr);
      }
    }

    // 3. Fallback Storage (Allows full functionality on Vercel preview or local without DB credentials)
    const storedItem: StoredReservation = {
      _id: "res_" + Date.now(),
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      date,
      time,
      guests: guestCount,
      specialRequests: specialRequests ? specialRequests.trim() : "",
      seatingPreference: seatingPreference || "main_hall",
      status: "confirmed",
      confirmationCode,
      createdAt: new Date().toISOString(),
    };

    mockStore.unshift(storedItem);

    return NextResponse.json(
      {
        success: true,
        storage: "in_memory_reserve",
        message: "Rezervasyonunuz başarıyla onaylandı.",
        data: storedItem,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/reservations error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Rezervasyon kaydedilirken beklenmeyen bir hata oluştu.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const db = await connectToDatabase();
    if (db) {
      try {
        const reservations = await Reservation.find().sort({ createdAt: -1 }).limit(20);
        return NextResponse.json({
          success: true,
          storage: "mongodb",
          count: reservations.length,
          data: reservations,
        });
      } catch (err) {
        console.warn("MongoDB find error:", err);
      }
    }

    return NextResponse.json({
      success: true,
      storage: "in_memory_reserve",
      count: mockStore.length,
      data: mockStore,
    });
  } catch (error) {
    console.error("GET /api/reservations error:", error);
    return NextResponse.json(
      { success: false, message: "Rezervasyon kayıtları getirilemedi." },
      { status: 500 }
    );
  }
}
