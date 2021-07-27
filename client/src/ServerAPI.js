const ServerAPI = {
    postFeedingData: async (data) => {
        const datetime = data.datetimefed;
        const datetimeToUTC = convertDateTimeToMySQLDateTime(datetime);
        data.datetimefed = datetimeToUTC;

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)

        }

        const response = await fetch('api/postFeedingData', options);
        console.log(response.body);
        return response.status;
    }
}

const convertDateTimeToMySQLDateTime = ( datetime ) => {
    const month = datetime.getUTCMonth()+1;
    const day = datetime.getUTCDate();
    const year = datetime.getUTCFullYear();
    const hour = datetime.getUTCHours();
    const minutes = datetime.getUTCMinutes();

    return `${year}-${month}-${day} ${hour}:${minutes}:00`;
}

export default ServerAPI;