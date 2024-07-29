import express  from "express";
import mongoose from "mongoose";

import User from "./models/User.js";


const app = express();

app.use(express.json());



app.get("/users", async (request,response)=>{
  const users = await User.find()

  return response.json(users)
})


app.post("/users", async (request,response)=>{
  const user = request.body


const newUser = await User.create(user)

return response.json(newUser);

});

mongoose.connect("mongodb+srv://admin:admin@cluster0.ar7wfqb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

.then( ()=> console.log("BANCO DE DADOS CONECTADO"))
.catch( () => console.log("DEU RUIM"))


app.listen(3333);
