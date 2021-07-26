// const db = require("../db");

module.exports = function (context, req) {
    const data = req.body;

    console.log(process.env["MySQLConnection_HOST"]);

    db.query(`
        INSERT INTO Feedings 
            (dateTimeFedUTC, country, provinceState, cityTown, parkName, duckCount, feedType, feedQty, feedQtyUnit) 
        VALUES 
            (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [data.datetimefed, data.country, data.provincestate, data.citytown, data.parkname, data.duckqty, data.feedtype, data.feedqty, data.feedqtyunit],
        (error, results) => {
            if (error) {
                context.log("Error message was: " + error.message);
                throw error;
            } else {
                context.res = {
                    status: 201,
                    body: {
                        results
                    }
                };

                context.done();
            }
        });
};

const db = mysql.createConnection({
    host: process.env["MySQLConnection_HOST"],
    user: process.env["MySQLConnection_USER"],
    password: process.env["MySQLConnection_PASSWORD"],
    database: process.env["MySQLConnection_DB"],
    port: process.env["MYSQLConnection_PORT"]
});