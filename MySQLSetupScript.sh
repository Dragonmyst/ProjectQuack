#!/bin/bash

echo "Please enter root user MySQL password!"
read -s rootpasswd

mysql -u root -p${rootpasswd} -e "DROP DATABASE IF EXISTS projectquackdb;"
echo ""

echo "Creating database..."
mysql -u root -p${rootpasswd} -e "CREATE DATABASE projectquackdb;"
echo "Database created!"
echo ""

echo "Showing existing databases..."
mysql -u root -p${rootpasswd} -e "SHOW DATABASES"
echo ""

echo "Creating table..."
mysql -u root -p${rootpasswd} -e "USE projectquackdb; CREATE TABLE Feedings
(
    id INT NOT NULL AUTO_INCREMENT,
    datefed DATETIME NOT NULL,
    createddate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    country VARCHAR(250) NOT NULL,
    provincestate VARCHAR(250) NULL,
    citytown VARCHAR(250) NULL,
    parkname VARCHAR(250) NULL,
    duckcount INT NULL,
    feedtype VARCHAR(250) NOT NULL,
    quantity DOUBLE NULL,
    quantityunit VARCHAR(250) NULL,
    PRIMARY KEY pk (id)
);"
echo "Table created!"

exit