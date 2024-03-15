"use client";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const handleSubmit = (event) => {
  console.log("submit");

  //stop the form from submitting
  event.preventDefault();

  const data = new FormData(event.currentTarget);

  let username = data.get("username");
  let password = data.get("password");
  let confirmpassword = data.get("confirmpassword");

  //log the form data
  console.log("username", username);
  console.log("password", password);
  console.log("confirmpassword", confirmpassword);

  runDBCallAsync(
    "http://localhost:3000/api/register?username=${username}&password=${password}&confirmpassword=${confirmpassword}"
  );
}; //end of handleSubmit

async function runDBCallAsync(url) {
  //make a call to the server
  const res = await fetch(url);
  const data = await res.json();

  if (data.data === "true") {
    console.log("registration is valid");
  } else {
    console.log("registration is not valid");
  }
} //end of runDBCallAsync

export default function Page() {
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="username"
        name="username"
        autoComplete="username"
        autoFocus
      />{" "}
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="confirmpassword"
        label="confirmpassword"
        type="password"
        id="confirmpassword"
        autoComplete="current-confirmpassword"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Link href="/">already have a account? login</Link>
    </Box>
  );
}
