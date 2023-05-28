const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connection Successful!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors());

// Import the required routers
const product2Router = require("../Product/product1");
const userRouter = require("../User/user2");
const orderRouter = require("../Order/order");
const cartRouter = require("./cart");

// Use the routers
app.use('/api/product1', product2Router);
app.use('/api/user', userRouter);
app.use('/api/order', orderRouter);
app.use('/api/cart', cartRouter);

app.listen(process.env.PORT || 5002, () => {
  console.log("Cart microservice is running!");
});
