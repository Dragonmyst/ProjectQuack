const apiUrl = process.env.REACT_APP_API_URL;

const ServerAPI = {
    postFeedingData: async () => {
        const response = await fetch(`${apiUrl}/POSTFeederData`)
        return await response.json();
    }
}

export default ServerAPI;