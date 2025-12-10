import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    phone_no: { type: String },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["ADMIN", "OWNER", "STAFF"],
      default: "OWNER",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
