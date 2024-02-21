import { connectToDatabase } from "../../../utils/connectMongo";
import { user } from "../../../../models/user";

export default async function handler(req, res) {
  await connectToDatabase();

  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });

    if (user) {
      res.status(200).json({ message: "User found" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Error during login" });
  }
}
