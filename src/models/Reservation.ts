import mongoose, { Schema, Document, Model } from "mongoose";

export interface IReservation extends Document {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
  seatingPreference?: "wine_cellar" | "fireplace" | "chef_table" | "main_hall";
  status: "confirmed" | "pending" | "cancelled";
  confirmationCode: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const ReservationSchema: Schema = new Schema<IReservation>(
  {
    fullName: {
      type: String,
      required: [true, "Lütfen adınızı ve soyadınızı belirtiniz."],
      trim: true,
      minlength: [3, "Ad en az 3 karakter olmalıdır."],
    },
    email: {
      type: String,
      required: [true, "Lütfen e-posta adresinizi giriniz."],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Geçerli bir e-posta adresi giriniz."],
    },
    phone: {
      type: String,
      required: [true, "Lütfen irtibat telefonunuzu giriniz."],
      trim: true,
    },
    date: {
      type: String,
      required: [true, "Lütfen rezervasyon tarihini seçiniz."],
    },
    time: {
      type: String,
      required: [true, "Lütfen 19:00 ile 23:00 arasında bir saat seçiniz."],
      validate: {
        validator: function (v: string) {
          const allowedTimes = [
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
          return allowedTimes.includes(v);
        },
        message: "Rezervasyon saatleri 19:00 ile 23:00 arasında olmalıdır.",
      },
    },
    guests: {
      type: Number,
      required: [true, "Kişi sayısı zorunludur."],
      min: [1, "En az 1 konuk seçilmelidir."],
      max: [12, "12 kişiden büyük gruplar için lütfen doğrudan iletişime geçiniz."],
    },
    specialRequests: {
      type: String,
      trim: true,
      maxlength: [500, "Özel istekler 500 karakteri geçemez."],
    },
    seatingPreference: {
      type: String,
      enum: ["wine_cellar", "fireplace", "chef_table", "main_hall"],
      default: "main_hall",
    },
    status: {
      type: String,
      enum: ["confirmed", "pending", "cancelled"],
      default: "confirmed",
    },
    confirmationCode: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Reservation: Model<IReservation> =
  mongoose.models.Reservation ||
  mongoose.model<IReservation>("Reservation", ReservationSchema);

export default Reservation;
