Drop database if exists burger_db;
CREATE DATABASE burger_db;
use burger_db;

CREATE TABLE burgers(
    burger_id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(45) NOT NULL,
    devoured BOOLEAN NOT NULL,
   PRIMARY KEY (burger_id)
);
  
INSERT INTO burgers (burger_name, devoured) VALUES
("BIG MAC", FALSE),
("DOUBLE CHEESE BURGER", TRUE),
("MAC DOUBLE", FALSE);