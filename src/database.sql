CREATE DATABASE restapibasica;

CREATE TABLE persons(
    id SERIAL PRIMARY KEY,
    username VARCHAR(40),
    email VARCHAR(40)
);

INSERT INTO persons VALUES 
    (1,'andres', 'andres@andres.com');
    (2,'mauricio', 'mauricio@mauricio.com');