import mongoose, { Schema, Document, Model } from "mongoose";

export interface IMenuItem extends Document {
  name: string;
  turkishName?: string;
  description: string;
  price: number;
  category: "starter" | "main" | "wine_pairing" | "dessert";
  subcategory?: string;
  pairing?: string;
  signature?: boolean;
  dietary?: string[];
  vintage?: string;
  origin?: string;
  image?: string;
  alcoholPercentage?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const MenuItemSchema: Schema = new Schema<IMenuItem>(
  {
    name: {
      type: String,
      required: [true, "Menü öğesi adı zorunludur"],
      trim: true,
    },
    turkishName: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Açıklama alanı zorunludur"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Fiyat zorunludur"],
      min: [0, "Fiyat negatif olamaz"],
    },
    category: {
      type: String,
      required: [true, "Kategori seçimi zorunludur"],
      enum: {
        values: ["starter", "main", "wine_pairing", "dessert"],
        message: "{VALUE} geçerli bir kategori değil",
      },
    },
    subcategory: {
      type: String,
      trim: true,
    },
    pairing: {
      type: String,
      trim: true,
    },
    signature: {
      type: Boolean,
      default: false,
    },
    dietary: {
      type: [String],
      default: [],
    },
    vintage: {
      type: String,
    },
    origin: {
      type: String,
    },
    image: {
      type: String,
    },
    alcoholPercentage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model recompilation in Next.js hot reload
export const MenuItem: Model<IMenuItem> =
  mongoose.models.MenuItem || mongoose.model<IMenuItem>("MenuItem", MenuItemSchema);

export default MenuItem;
