export async function GET(req, res) {
  //make a note of the route
  console.log("saving to db route");

  //get the value of the query parameter
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");
  const timex = searchParams.get("time");
  const urlx = searchParams.get("url");
  console.log(timex);
  console.log(urlx);
  console.log(username);

  //connect to the database
  const { MongoClient } = require("mongodb");

  const url = "mongodb://root:example@localhost:27017/";
  const client = new MongoClient(url);
  const dbName = "app"; //name of the database

  await client.connect();
  console.log("Connected to the database");
  const db = client.db(dbName);
  const collection = db.collection("logs"); //collection name

  //check if the username is already in the database
  const findResult = await collection.insertOne({
    username: username,
    time: timex,
    url: urlx

  });

  let valid = true;

  //at the end of the process we need to send something back.
  return Response.json({ data: "" + valid + "" });
}