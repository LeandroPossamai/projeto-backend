const express = require("express");
const routes = express.Router();

//GET: BUSCAR UMA INFORMAÇAO

routes.get("/", (req, res) => res.send("hellow world"));

module.exports = routes;
