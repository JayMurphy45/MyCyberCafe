export async function GET(req, res) {
  console.log("login route");

  //get the value of the query parameter
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");
  const password = searchParams.get("password");

  //log the value of the query parameter
  console.log("username", username);
  console.log("password", password);

  //connect to the database
  const { MongoClient } = require("mongodb");

  const url = "mongodb://root:example@localhost:27017/";
  const client = new MongoClient(url);

  const dbName = "app"; //name of the database

  await client.connect();
  console.log("Connected to the database");
  const db = client.db(dbName);
  const collection = db.collection("login"); //collection name

  //check if the username is already in the database
  const findResult = await collection.find({ username: username }).toArray();
  console.log("found documents =>", findResult);

  let valid = false;
  if (findResult.length > 0) {
    valid = true;
    console.log("User found");
  } else {
    valid = false;
    console.log("User not found");
  }

  //at the end of the process we need to send something back.
  return Response.json({ data: "" + valid + "" });
}
