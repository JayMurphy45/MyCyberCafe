const { MongoClient } = require("mongodb");

export const connectToDatabase = async () => {
  const url = "mongodb://localhost:27017/";
  const client = new MongoClient(url);

  const dbName = "app";

  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("login"); //collection name

  const findResult = await collection.find({ username: "username" }).toArray();
  console.log(findResult);

  let valid = false;

  if (findResult.length > 0) {
    valid = true;
    console.log("User found");
  } else {
    valid = false;
    console.log("User not found");
  }
};
