const db = require("../db");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // db.query("INSERT INTO Feedings (datefed, country, feedtype) VALUES (?, ?, ?)", [new Date(), "Canada", "Bread"], (error, results) => {
    //     if (error) console.log(error);
    //     console.log(results);
    // });

    // db.query("SELECt * FROM Feedings", (error, results) => {
    //     if (error) console.log(error);
    //     console.log(results);
    // });

    console.log(req.body);

    context.res = {
        // status: 200, /* Defaults to 200 */
        status: 200
    };
}