CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR (30) NOT NULL,
devoured BOOLEAN DEFAULT false,
);



