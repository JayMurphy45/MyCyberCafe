"use client";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "@mui/material/Link";

export default function Page() {
  //state variable to hold the error message
  const [open, setOpen] = React.useState(false);

  //create a state variable to hold the error message
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [errorHolder, setErrorHolder] = React.useState(false);

  //validate the form
  const validateForm = (event) => {
    console.log("validate form");

    let errorMessage = "";

    const data = new FormData(event.currentTarget);

    //get the email
    let username = data.get("username");

    //pull in the validator
    var validator = require("email-validator");

    //validate the email
    let emailCheck = validator.validate(username);

    //vaidate the password
    let password = data.get("password");
    if (password.length < 8) {
      errorMessage += "Password is too short";
    }

    //print the result
    console.log("emailIsValid", emailCheck);

    //if it is not valid, stop the form from submitting
    if (emailCheck == false) {
      errorMessage += "Email is not valid";
    }

    return errorMessage;
  };
  const handleSubmit = (event) => {
    console.log("submit");

    //stop the form from submitting
    event.preventDefault();
    //validate the form
    let errorMessage = validateForm(event);

    //save the message
    setErrorHolder(errorMessage);

    if (errorMessage.length > 0) {
      setOpen(true);
    } else {
      const data = new FormData(event.currentTarget);

      let username = data.get("username");
      let password = data.get("password");

      //log the form data
      console.log("username", username);
      console.log("password", password);

      runDBCallAsync(
        "http://localhost:3000/api/register?username=" +
          username +
          "&password=" +
          password
      );
    } //end of else
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

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Error"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {errorHolder}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
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
        Register
      </Button>
      <Link href="/">already have a account? login</Link>
    </Box>
  );
}
