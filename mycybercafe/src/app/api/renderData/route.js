

import { MongoClient } from "mongodb";
import { cookies } from "next/headers";

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

    const url = "mongodb://root:example@127.0.0.1:27017/";
    const client = new MongoClient(url);
    const dbName = "app"; //name of the database
   
    await client.connect();
    console.log("Connected to the database");

     
    const db = client.db(dbName);
    const collection = db.collection("logs"); 

    //change the findResult to get record and make it so it can get the record from the database 


    const findResult1 = await collection.find({ }).toArray();
    console.log("found documents =>", findResult1[0].time, findResult1[1].time, findResult1[2].time, findResult1[3].time);
    let point1 = findResult1[0].time;
    let point2 = findResult1[1].time;
    let point3 = findResult1[2].time;
    let point4 = findResult1[3].time;
      

    //findResult1 all records

    //or by index

    //findResult1[0] // just get the first record

      const findResult2 = await collection.find({ username: "username", url1: "url" }).toArray();
      console.log("found documents =>", findResult2[username, url1]);
      let valid = true;

    
  
    //at the end of the process we need to send something back.
    return Response.json([point1, point2, point3, 2, 20, 30, 45]
    );
    
  }
  