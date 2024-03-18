export async function GET(req, res) {
  //make a note of the route
  console.log("register route");

  //get the value of the query parameter
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");
  const password = searchParams.get("password");

  //bcrypt the password
  const bcrypt = require("bcrypt");
  const saltRounds = 10;

  //hash the password
  const hash = bcrypt.hashSync(password, saltRounds);

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
  const findResult = await collection.insertOne({
    username: username,
    password: hash,
  });
  console.log("inserted");
  let valid = true;

  //at the end of the process we need to send something back.
  return Response.json({ data: "" + valid + "" });
}
