const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000
var nomes = []

const db = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
})

db.query("CREATE TABLE IF NOT EXISTS pessoas (id INT NOT NULL AUTO_INCREMENT, nome CHAR(30) NOT NULL, PRIMARY KEY (id));", function (err, results, fields) {
    db.query("SELECT COUNT(*) AS total FROM pessoas;", function (err, results, fields) {
        if (results[0].total == 0) {
            db.query("INSERT INTO pessoas (nome) VALUES ('Daniel'),('Maria'),('Francisco'),('Sandra');", function (err, results, fields) {
                db.query("SELECT nome FROM pessoas;", function (err, results, fields) {
                    nomes = results;
                    db.end()
                });
            })
        }
        else {
            db.query("SELECT nome FROM pessoas;", function (err, results, fields) {
                nomes = results;
                db.end()
            });
        }
    })
})


app.get('/', (req, res) => {
    resultado = `<h1>Full Cylcle 2.0</h1><br /><br />
    <h2>Nomes cadastrados:</h2><br />
    <ul>`
    Object.keys(nomes).forEach(function (key) {
        resultado = resultado + `<li>${nomes[key].nome}</li>`
    });
    resultado = resultado + `</ul>`
    res.send(resultado)
})

app.listen(port, () => {
    console.log('Servidor executando na porta: ' + port)
})