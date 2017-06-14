CREATE DATABASE twitter;

USE twitter;

CREATE TABLE tweet (
tweet VARCHAR(50)
);

/* assign a new user to the new database */
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON twitter.* TO 'newuser'@'localhost';
FLUSH PRIVILEGES;

INSERT INTO tweet (tweet)
VALUES
('Hello world, this is my first tweet!'),
('Hello again!');
