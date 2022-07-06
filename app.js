const express = require('express');
const hbs = require("hbs");
const app = express();

//
// CONFIG
//
app.use(express.static('public')); // configure express to use "public" as the directory for static content

app.set("views", __dirname + "/views"); //tells our Express app where to look for our views
app.set("view engine", "hbs"); //sets HBS as the template engine

hbs.registerPartials(__dirname + "/views/partials"); // config. for partials



//
// ROUTES
//

app.get("/", (req, res) => {
    // res.send("this is string");
    // res.sendFile(__dirname + '/views/home.html');
    res.render("home");
});


app.get("/products", (req, res) => {
    res.render("products"); // render "products.hbs"
});


app.get("/products/nyan", (req, res) => {

    const productDetails = {
        title: "Nyan NFT",
        price: 30,
        imgFile: "nyan.png"
    }

    res.render("product-details", productDetails);
});


app.get("/products/ironhack", (req, res) => {

    const productDetails = {
        title: "Ironhack NFT",
        price: 40,
        imgFile: "ironhack.png"
    }

    res.render("product-details", productDetails);
});


app.get("/products/stranger", (req, res) => {

    const productDetails = {
        title: "Stranger Coding Things NFT",
        imgFile: "stranger.jpg",
        categories: ["techies", "best-sellers", "luxury"]
    }

    res.render("product-details", productDetails);
});


app.get("/contact", (req, res) => {
    res.render("contact-page");
});


app.listen(3000, () => console.log("express app listening in port 3000"));

