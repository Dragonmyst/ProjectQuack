const apiUrl = process.env.REACT_APP_API_URL;

const ServerAPI = {
    postFeedingData: async (data) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)

        }

        const response = await fetch(`${apiUrl}/POSTFeederData`, options);
        const status = response.status;
        console.log(status);
        return "successful";
    }
}

export default ServerAPI;