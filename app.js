const express = require('express');
const hbs = require("hbs");
const app = express();

const productsArr = require("./data/products");

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


app.get("/products/:productId", (req, res) => {
    const id = req.params.productId;
    
    const productDetails = productsArr.find( productObj => id == productObj.id);

    if(productDetails){
        res.render("product-details", productDetails);
    } else {
        res.status(404).send("product doesnt exist")
    }
});


app.get("/contact", (req, res) => {
    res.render("contact-page");
});


app.listen(3000, () => console.log("express app listening in port 3000"));

