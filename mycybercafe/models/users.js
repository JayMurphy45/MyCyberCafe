import { Schema, model, models } from "mongoose";




// insert mongoose user data schema
const userschema = new mongoose.Schema({
  email: {
    String,
    required: true,
    unique: true
  },
  password: { 
    String,
  }
});

//see if user model exists if not create a new user model with user schema
const user = models.user || model('User', userschema)

export default user;