import { Schema, Models, model } from "mongoose";

// Define the schema
const userSchema = new Schema({
  // Define the fields in the schema

  //username field
  username: {
    type: String,
    required: true,
    unique: true,
  },

  //password field
  password: {
    type: String,
    required: true,
  },
});
export default model.User || model("User", userSchema);
