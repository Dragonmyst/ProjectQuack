const db = require("../db");

module.exports = function (context, req) {
    const data = req.body;

    db.connect(
        function (err) {
            if (err) {
                console.log("!!! Cannot connect !!! Error:");
                throw err;
            }
            else {
                console.log("Connection established.");

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
            }
        });
};