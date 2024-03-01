
const article = document.querySelector("article");

let currentURL = window.location;

<<<<<<< Updated upstream
//alert("current address is: " + currentURL);
/*
setTimeout(() => {
    fetch('http://localhost:3000/api/SaveToDb?username=john&url=' + encodeURIComponent(currentURL))
        .then(response => {
            // Handle the response here
        })
        .catch(error => {
            // Handle any errors here
        });
}, 5000); // 5000 milliseconds = 5 seconds
*/
=======
alert("current address is: " + currentURL);

fetch(
  "http://localhost:3000/api/SaveToDb?username=john&url=${encodeURIComponent(currentURL)}"
);
fetch("http://localhost:3000/api/SaveToDb?username=john&url=" + currentURL); //Kyle's version
content.js;
>>>>>>> Stashed changes
