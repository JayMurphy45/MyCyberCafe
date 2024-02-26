"use client";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

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
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
    </Box>
  );
}

const handleSubmit = (event) => {
  console.log("submit");

  //stop the form from submitting
  event.preventDefault();

  const data = new FormData(event.currentTarget);

  let username = data.get("username");
  let password = data.get("password");

  //log the form data
  console.log("username", username);
  console.log("password", password);

  runDBCallAsync(
    "http://localhost:3000/api/login?username=${username}&password=${password}"
  );
}; //end of handleSubmit

async function runDBCallAsync(url) {
  //make a call to the server
  const res = await fetch(url);
  const data = await res.json();

  if (data.data === "valid") {
    console.log("login is valid");
  } else {
    console.log("login is not valid");
  }
}
