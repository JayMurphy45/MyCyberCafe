import connectMongo from "../../../../utils/connectMongo";
export async function POST(req, res) {

  // Make a note we are on
  // the api. This goes to the console.
  console.log("in the register api page")

  //post method to send data to the client
  if (req.method === "POST") {
    // Handle registration logic here
    const { email, password, confirmPassword } = req.body;

    // Return a response indicating success or failure
    res.status(200).json({ message: "Registration successful" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}