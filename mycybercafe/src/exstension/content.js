const article = document.querySelector("article");

let currentURL = window.location;

//alert("current address is: " + currentURL);

fetch('http://localhost:3000/api/SaveToDb?username=john&url=${encodeURIComponent(currentURL)}')
//fetch('http://localhost:3000/api/SaveToDb?username=john&url='+currentURL); //Kyle's version
// content.js
