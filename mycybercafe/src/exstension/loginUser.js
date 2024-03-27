// access is given to the user to login to the web app
//if they are logged in on the web app

async function loginUser(username, password) {
  try {
    //make a post request to the login route
    const response = await fetch(
      `http://localhost:3000/api/login?username=${username}&password=${password}`,
      {
        method: "GET",
        credentials: "same-origin", //includes cookies along with the request
      }
    );

    //parse the response
    const data = await response.json();

    //check if login was successful
    if (data.data == "true") {
      console.log("Login successful");
      //if the login was successful, set the cookie
      chrome.cookies.set({
        url: "http://localhost:3000",
        name: "auth", //name of the cookie
        value: "true", //value of the cookie
      });
      chrome.cookies.set({
        url: "http://localhost:3000",
        name: "username", //name of the cookie
        value: username, //value of the cookie
      });
    } else {
      console.log("Login failed");
    }
  } catch (e) {
    console.log(e);
  }
}
