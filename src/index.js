require("dotenv").config();

const express = require("express");
const { MongoClient } = require("mongodb");
const routes = require("./routes");
const connectToDatabase = require("./database");

connectToDatabase();

const app = express();
const port = 3333;

const uri =
  "mongodb+srv://admin:admin@cluster0.2vltt1i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Adicione a lógica do seu app aqui, por exemplo:
app.use((req, res, next) => {
  req.db = db;
  next();
});

app.use(routes);
