  
export default async function connectMongo (req, res){
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
}