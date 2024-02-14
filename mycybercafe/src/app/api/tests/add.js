import connectMongo from "../../../../utils/connectMongo"; //connect mongo function
import user from "../../../../models/users";

export default async function addTest(req, res){
    
    console.log("Connecting mongo");

    //connectmongo
    await connectMongo();

    console.log("Connected mongo");


    //creating document for user schema
    console.log("creating document")
    const user = await user.create(req.body);
    console.log("created document");

    res.json({user});

}