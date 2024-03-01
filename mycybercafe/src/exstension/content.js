const article = document.querySelector("article");

let currentURL = window.location;

alert("current address is: " + currentURL);

setTimeout(() => {
  fetch(
    "http://localhost:3000/api/SaveToDb?username=john&url=" +
      encodeURIComponent(currentURL)
  )
    .then((response) => {
      // Handle the response here
    })
    .catch((error) => {
      // Handle any errors here
    });
}, 5000); // 5000 milliseconds = 5 seconds
