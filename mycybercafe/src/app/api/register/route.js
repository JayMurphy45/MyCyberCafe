export async function GET(req, res) {

    // Make a note we are on
    // the api. This goes to the console.
    console.log("in the api page")
  
  
    // get the values
    // that were sent across to us.
    const { searchParams } = new URL(req.url)
    const email = searchParams.get('email')
    const pass = searchParams.get('pass')
    const pass2 = searchParams.get('pass2')
    const DOB = searchParams.get('DOB')
    const PhoneNumber = searchParams.get('PhoneNumber')
    console.log(email);
    console.log(pass);
    console.log(pass2);
    console.log(DOB);
    console.log(PhoneNumber);
  
   
  
    // =================================================
  const { MongoClient } = require('mongodb');
  const url = 'mongodb://root:example@localhost:27017/';
  const client = new MongoClient(url);
  const dbName = 'app'; // database name
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('login'); // collection name
  const findResult = await collection.find({"username":
  "sample@test.com"}).toArray();
  console.log('Found documents =>', findResult);
  
  
  
  
  let valid = true;
  
  
    // at the end of the process we need to send something back.
  return Response.json({ "data":"" + valid + ""})
  }