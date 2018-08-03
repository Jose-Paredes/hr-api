CREATE DATABASE IF NOT EXISTS hr_api;
use hr_api;

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL ,
  salary INT(11) DEFAULT NULL ,
  PRIMARY KEY (id)
);

INSERT INTO employees VALUES
  (1, 'Ryan Ray', 20000),
  (2, 'Joe McMilan', 40000),
  (3, 'John Carter', 50000);

DESCRIBE employees;
