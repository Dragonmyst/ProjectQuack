const apiUrl = process.env.REACT_APP_API_URL;

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
        const status = response.status;
        console.log(response);
        console.log(response.status);
        if (status !== 201) {
            return "unsuccessful";
        }
        return "successful";
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