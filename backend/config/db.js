import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://varunwali36:BClyDeCPZGPfpYNx@cluster0.smiahg0.mongodb.net/food-del"
    )
    .then(() => {
      console.log("DB connected");
    });
};
