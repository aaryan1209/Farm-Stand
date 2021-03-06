const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/product");
const methodOverride = require("method-override");

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection made!!");
    })
    .catch(err => {
        console.log("Error: ");
        console.log(err);
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get('/products', async (req, res) => {
    const products =await Product.find({});
    //console.log(products);
    //res.send("All products will be here");
    res.render('products/index', {products});
});

app.get('/products/new', (req, res) => {
    res.render('products/new');
});

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    //console.log(req.body);
    res.redirect(`/products/${newProduct._id}`);
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', {product});
});

app.get('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.render('products/show', {product});
});

app.put('products/:id', async (req, res) => {
    console.log(req.body);
    res.send("PUT!!");
})

app.listen(3000, () => {
    console.log("Listening to the port 3000");
});