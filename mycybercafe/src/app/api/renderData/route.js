

import { MongoClient } from "mongodb";
export async function GET(req, res) {  
    //get the value of the query parameter
    //connect to the database

    const url = "mongodb+srv://b00143682:test12345@cluster0.pggqupk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(url);
    const dbName = "app"; //name of the database
   
    await client.connect();
    console.log("Connected to the database");

     
    const db = client.db(dbName);
    const collection = db.collection("logs"); 

    //change the findResult to get record and make it so it can get the record from the database 


    const findResult1 = await collection.find({"username":"johnx"}).toArray();
    console.log("found documents =>", findResult1);

    let rec1 = findResult1[0];
    console.log(rec1.time);


    let rec2= findResult1[1];
    console.log(rec2.time);

    let totalTime = rec2.time - rec1.time;
    console.log(totalTime);

    //findResult1 all records

    //or by index

    //findResult1[0] // just get the first record
  
    //at the end of the process we need to send something back.
    return Response.json([totalTime, rec2.url]
    );
    
  }
  