const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        default: 20,
        min: 1,
        max: 200
    },
    imgFile: String,
    hasStock: {
        type: Boolean,
        default: true
    },
    category: {
        type: String,
        enum: ["tech", "sports", "food"]
    },
    tags: [String]
});

const Product = mongoose.model("Product", productSchema);





mongoose
  .connect('mongodb://localhost/stranger-nfts')
  .then(x => {

    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    
    const newProducts = [
        {
            title: "Lucas Laptop NFT",
            price: 190,
        },
        {
            title: "Felipe Lasagna NFT",
            price: 192,
        },
    ]

    return Product.insertMany(newProducts);
  })
  .then( response => {
    console.log("request to DB was successful");
    console.log(response)

    return Product.deleteMany({})
    
  })
  .then( (response) => {
    console.log(response)
    mongoose.connection.close();
  })
  .catch(err => console.error('Error interacting with DB', err));



  

