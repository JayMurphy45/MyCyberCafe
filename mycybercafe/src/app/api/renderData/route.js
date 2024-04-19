// connnect mongo

// print

//[ 100 ]

export async function GET(req, res) {
  //get the value of the query parameter
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");
  const time = searchParams.get("time");
  const url1 = searchParams.get("url");

  //log the value of the query parameter
  console.log("username", username);
  console.log("time", time);
  console.log("url", url1);

  //connect to the database
  const { MongoClient } = require("mongodb");

  const url =
    "mongodb+srv:/b00143682:Test12345678@cluster0.pggqupk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  const client = new MongoClient(url);
  const dbName = "app"; //name of the database

  await client.connect();
  console.log("Connected to the database");
  const db = client.db(dbName);
  const collection = db.collection("logs");

  //change the findResult to get record and make it so it can get the record from the database
  const getRecordA = await collection.insertOne({
    username: username,
    time: time,
  });
  const getRecordB = await collection.insertOne({
    url1: url1,
  });
  console.log("inserted");
  let valid = true;

  //at the end of the process we need to send something back.
  return Response.json([getRecordA, getRecordB]);
}
