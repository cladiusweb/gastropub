import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import MenuItem from "@/models/MenuItem";
import { MOCK_MENU_ITEMS } from "@/data/mockMenu";

// Express-style Controller Logic for Menu API
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const query = searchParams.get("q")?.toLowerCase();

    // Try MongoDB connection
    const db = await connectToDatabase();

    if (db) {
      try {
        const filter: Record<string, unknown> = {};
        if (category && category !== "all") {
          filter.category = category;
        }
        if (query) {
          filter.$or = [
            { name: { $regex: query, $options: "i" } },
            { turkishName: { $regex: query, $options: "i" } },
            { description: { $regex: query, $options: "i" } },
          ];
        }

        const items = await MenuItem.find(filter).sort({ price: 1 });
        if (items && items.length > 0) {
          return NextResponse.json({
            success: true,
            source: "mongodb",
            count: items.length,
            data: items,
          });
        }
      } catch (dbErr) {
        console.warn("MongoDB query error, falling back to mock dataset:", dbErr);
      }
    }

    // Graceful Fallback with full filter support
    let filtered = [...MOCK_MENU_ITEMS];

    if (category && category !== "all") {
      filtered = filtered.filter((item) => item.category === category);
    }

    if (query) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.turkishName.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.pairing?.toLowerCase().includes(query)
      );
    }

    return NextResponse.json({
      success: true,
      source: "mock_fallback",
      count: filtered.length,
      data: filtered,
    });
  } catch (error) {
    console.error("GET /api/menu error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Menü verileri alınırken bir sunucu hatası oluştu.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// POST endpoint to add a new menu item
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Express-like body validation
    const { name, description, price, category } = body;
    if (!name || !description || price === undefined || !category) {
      return NextResponse.json(
        {
          success: false,
          message: "Lütfen zorunlu alanları doldurun: name, description, price, category.",
        },
        { status: 400 }
      );
    }

    const db = await connectToDatabase();
    if (db) {
      const newItem = await MenuItem.create(body);
      return NextResponse.json(
        {
          success: true,
          message: "Menü öğesi başarıyla MongoDB'ye kaydedildi.",
          data: newItem,
        },
        { status: 201 }
      );
    }

    // Mock fallback response for environments without active MongoDB URI
    const mockCreated = {
      _id: "m-" + Date.now(),
      ...body,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        source: "mock_stored",
        message: "Menü öğesi oluşturuldu (Mock depolama aktif).",
        data: mockCreated,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/menu error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Menü öğesi oluşturulamadı.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
