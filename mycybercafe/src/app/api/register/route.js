import { connectToDatabase } from "../../../utils/connectMongo";
import { user } from "../../../models/user";

export default async function handler(req, res) {
  await connectToDatabase();

  console.log("in api login");

  const { username, password } = req.body;

  try {
    // Create a new user
    const user = new User({
      username,
      password,
    });

    await user.save();

    res.status(200).json({ message: "User created" });
  } catch (error) {
    // Handle any errors that occurred during registration
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Error during registration" });
  }
}
