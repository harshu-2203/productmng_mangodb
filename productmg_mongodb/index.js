require("dotenv").config();

const express = require('express')
const app = express()
app.use(express.json());
const port = 3000

const company = require("./router/company");
const product= require("./router/product");
const seller = require("./router/seller");

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGOURL).then(() => console.log("mongo db connected"));

app.use("/cmp",company);
app.use("/seller",seller);
app.use("/product",product);
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))