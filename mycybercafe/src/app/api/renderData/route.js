

import { MongoClient } from "mongodb";
export async function GET(req, res) {  

    const url = "mongodb+srv://b00143682:test12345@cluster0.pggqupk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(url);
    const dbName = "app"; 
   
    await client.connect();
    console.log("Connected to the database");
 
    const db = client.db(dbName);
    const collection = db.collection("logs"); 

    const findResult1 = await collection.find({"username":"johnx"}).toArray();
    console.log("found documents =>", findResult1);

    let rec1 = findResult1[0];
    console.log(rec1.time);

    let rec2= findResult1[1];
    console.log(rec2.time);

    let rec3 = findResult1[2];
    console.log(rec3.time);

    let rec4 = findResult1[3];
    console.log(rec4.time);

    let totalTime = rec2.time - rec1.time;
    console.log(totalTime);

    let totalTime1 = rec3.time - rec2.time;
    console.log(totalTime1);

    let totalTime2 = rec4.time - rec3.time;
    console.log(totalTime2);

    return Response.json([totalTime, rec2.url,totalTime1, rec3.url,totalTime2, rec4.url]);
  }
  