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

// Import microservice routers
const userRouter = require("./User/user2");
const authRouter = require("./routes/auth");
const product2Router = require("./Product/product1");
const cartRouter = require("./Cart/cart");
const orderRouter = require("./Order/order");

// Set up microservice routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/product1", product2Router);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.listen(process.env.PORT || 5001, () => {
  console.log("Backend server is running!");
});
