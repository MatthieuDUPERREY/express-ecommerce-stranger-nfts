const express = require('express');
const app = express();

//
// CONFIG
//
app.use(express.static('public')); // configure express to use "public" as the directory for static content


//
// ROUTES
//

app.get("/", (request, response) => {
    // response.send("this is string");
    response.sendFile(__dirname + '/views/home.html');
});


app.get("/products", (request, response) => {
    response.sendFile(__dirname + '/views/products-page.html');
});


app.get("/contact", (request, response) => {
    response.sendFile(__dirname + '/views/contact-page.html');
});


app.listen(3000, () => console.log("express app listening in port 3000"));

