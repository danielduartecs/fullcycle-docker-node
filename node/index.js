const express = require('express')
const mysql = require('mysql')
const app = express()
const porta = 3000
const cfg = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'fullcycle'
}

app.get('/', (req, res) => {
    const db = mysql.createConnection(cfg);

    db.query("SELECT nome FROM pessoas;", function (err, results, fields) {
        db.end()
        if(err) {
            console.log(e);
            res.sendStatus(500);
        }
        else {
            resultado = `<h1>Full Cylcle 2.0</h1><br /><br />
            <h2>Nomes cadastrados:</h2><br />
            <ul>`
            Object.keys(results).forEach(function (key) {
                resultado = resultado + `<li>${results[key].nome}</li>`
            });
            resultado = resultado + `</ul>`
            res.send(resultado)
        }
    });
})

app.listen(porta, () => {
    console.log('Servidor executando na porta: ' + porta)
})