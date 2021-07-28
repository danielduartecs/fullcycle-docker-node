USE fullcycle;

CREATE TABLE IF NOT EXISTS pessoas (
    id INT NOT NULL AUTO_INCREMENT, 
    nome CHAR(30) NOT NULL, 
    PRIMARY KEY (id)
);

INSERT INTO pessoas (nome) VALUES ('Daniel'),('Maria'),('Francisco'),('Sandra');
