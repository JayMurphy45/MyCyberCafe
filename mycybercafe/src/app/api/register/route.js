export async function GET(req, res) {

  // Make a note we are on
  // the api. This goes to the console.
  console.log("in the api page")


  // get the values
  // that were sent across to us.
  /*
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  const pass = searchParams.get('pass')
  const pass2 = searchParams.get('pass2')
  console.log(email);
  console.log(pass);
  console.log(pass2);
*/



  // Mongoose connect
  const mongoose = require("mongoose")

  const dburl = "mongodb+srv://jamie:X590XOlHowHflFOG@cluster0.bjrqopf.mongodb.net/?retryWrites=true&w=majority"

  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  mongoose.connect(dburl, connectionParams).then(() => {
    console.log("Connected to the DB");
  }).catch((e) => {
    console.log("Error", e);
  });


 // insert mongoose data schema

  const usernameschema  = new mongoose.Schema({
    username: String
  });

  //make username object
  const username = mongoose.model('username', usernameschema);
  const jamie = new username({ name: 'Jamie'});
  console.log(jamie); // Logs jamie

  //saves data to database
  await jamie.save();
  let valid = true;


  // at the end of the process we need to send something back.
  return Response.json({ "data": "" + valid + "" })
}