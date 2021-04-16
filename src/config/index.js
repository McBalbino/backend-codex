//importa o framework express e o pacote body-parser
const express = require('express');
const bodyParser = require('body-parser');

const app = express(); //cria a aplicaçao chamando a função express


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://carolina:<DesafioCodex>@cluster0.yjokg.mongodb.net/tarefas?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});

app.use(bodyParser.json()); //possibilita uso de arquivos JSON
app.use(bodyParser.urlencoded({extended: false})); 

require('../controllers/authController')(app); //referencia o controller de autenticação
require('../controllers/taskController')(app);

app.listen(3000); //indica a porta