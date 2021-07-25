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
    dateTimeFedUTC DATETIME NOT NULL,
    createdDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    country VARCHAR(250) NOT NULL,
    provinceState VARCHAR(250) NULL,
    cityTown VARCHAR(250) NULL,
    parkName VARCHAR(250) NULL,
    duckCount INT NOT NULL,
    feedType VARCHAR(250) NOT NULL,
    feedQty DOUBLE NOT NULL,
    feedQtyUnit VARCHAR(250) NOT NULL,
    PRIMARY KEY pk (id)
);"
echo "Table created!"

exit