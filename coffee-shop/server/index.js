// console.log("index.js'e erişildi");
// import db from "./db";

const db = require("./db");
const coffeesRoute = require("./routes/CoffeesRoute");
const usersRoute = require("./routes/UsersRoute");
const ordersRoute = require("./routes/OrdersRoute");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/coffees", coffeesRoute);

app.use("/api/users", usersRoute);

app.use("/api/orders", ordersRoute);

const port = 4000;
app.listen(port, () => {
  console.log(`Serverimiz ${port} portunda çalışmaktadır. `);
});

// app.use("/", coffeesRoute);
