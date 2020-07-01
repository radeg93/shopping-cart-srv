const express = require("express");
const uuid = require("uuid");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type"
  );

  next();
});

// ROUTES
app.get("/api/products", (req, res) => {
  const products = [
    {
      id: uuid.v4(),
      name: "Samsung Galaxy Note 10+",
      price: 899,
      quantity: 100,
      selected: false,
    },
    {
      id: uuid.v4(),
      name: "Samsung Galaxy S20+",
      price: 990,
      quantity: 50,
      selected: false,
    },
    {
      id: uuid.v4(),
      name: "Xiaomi Redmi Note 9 Pro",
      price: 270,
      quantity: 200,
      selected: false,
    },
    {
      id: uuid.v4(),
      name: "iPhone X",
      price: 599,
      quantity: 70,
      selected: false,
    },
    {
      id: uuid.v4(),
      name: "iPhone 11 Pro",
      price: 999,
      quantity: 100,
      selected: false,
    },
  ];
  res.send(products);
});

app.listen(3000);
