module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const responseMessage = "Hello World";

    console.log(req.body);

    context.res = {
        // status: 200, /* Defaults to 200 */
        status: 200
    };
}