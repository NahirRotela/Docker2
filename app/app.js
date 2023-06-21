const express = require("express");
const mysql = require("mysql2");
const mongoose = require("mongoose");


const app = express(); 

// Configuración de la conexión a MySQL
const mysqlConnection = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root_password",
  database: "database_nahir",
});


// Configuración de la conexión a MongoDB
const mongodbConnection = mongoose.connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Verificar conexión a MySQL
app.get("/check-mysql-connection", (req, res) => {
  mysqlConnection.ping((err) => {
    if (err) {
      console.error("Error en la conexión a MySQL:", err);
      res.status(500).send("Error en la conexión a MySQL");
    } else {
      res.send("Conexión exitosa a MySQL");
    }
  });
});

// Verificar conexión a MongoDB
app.get("/check-mongodb-connection", (req, res) => {
  mongodbConnection.then(() => {
    console.log("Conexión exitosa a MongoDB");
    res.send("Conexión exitosa a MongoDB");
  }).catch((err) => {
    console.error("Error en la conexión a MongoDB:", err);
    res.status(500).send("Error en la conexión a MongoDB");
  });
});


// Iniciar la aplicación web en el puerto 3000
app.listen(3000, () => {
  console.log("Aplicación web en ejecución en el puerto 3000");
});
