import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  //if database is connected do nothing
  if (isConnected) {
    console.log("Is connected");
    return;
  }

  //if database is not connected connect to database
  try {
    await mongoose.connect("mongodb://localhost:27017/mycybercafe");

    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
