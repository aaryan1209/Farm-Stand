const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection made!!");
    })
    .catch(err => {
        console.log("Error: ");
        console.log(err);
    })

// const p = new Product({
//     name: 'Ruby grape fruit',
//     price: 40,
//     category: 'fruit'
// })
// p.save().then(p => {
//     console.log(p);
// })
// .catch(e => {
//     console.log(e);
// })

const seedProducts = [
    {
        name: 'Fairy eggplant',
        price: 20,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess',
        price: 100,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 80,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 30,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 50,
        category: 'dairy'
    }
]
Product.insertMany(seedProducts)
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
})