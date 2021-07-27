const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const connection = mysql.createConnection(config)


connection.query("CREATE TABLE IF NOT EXISTS pessoas (id INT NOT NULL AUTO_INCREMENT, nome CHAR(30) NOT NULL, PRIMARY KEY (id));")

connection.query('SELECT count(*) AS total FROM pessoas', function(err, rows, fields) {
    if (err) throw err;
    if( rows[0].total == 0 ) {
        connection.query("INSERT INTO pessoas(nome) values('Daniel', 'Maria', 'Bernado', 'Samara')")
    }
});


connection.end()

app.get('/', (req,res) => {
    res.send('<h1>Full Cylcle 2.0</h1>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})