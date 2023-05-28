const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userrouter = require("./routes/user");
const authrouter = require("./routes/auth");
const product2router = require("./routes/product2");
const cartrouter = require("./routes/cart");
const orderrouter = require("./routes/order");
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
app.use("/api/user", userrouter);
app.use("/api/auth", authrouter);
app.use("/api/product2", product2router);
app.use("/api/cart", cartrouter);
app.use("/api/order", orderrouter);


app.listen(process.env.PORT || 5001, () => {
  console.log("Backend server is running!");
});
