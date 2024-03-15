import { cookies } from "next/headers";

export async function GET(req, res) {
  console.log("check route");

  //get the auth cookie
  let record = cookies.get("auth");

  //log the value of the query parameter
  console.log(record.value);

  //at the end of the process we need to send something back.
  return Response.json({ data: "" + record.value + "" });
}
