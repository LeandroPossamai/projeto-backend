const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://admin:admin@cluster0.2vltt1i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

function connectToDatabase() {
  return MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((client) => {
      console.log("Conectado ao MongoDB com sucesso!");
      return client.db();
    })
    .catch((error) => {
      console.error("Erro ao conectar ao MongoDB:", error);
      throw error;
    });
}

module.exports = connectToDatabase;
