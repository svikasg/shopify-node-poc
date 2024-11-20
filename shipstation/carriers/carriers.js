const { shipStationApi } = require("../api");

const listCarriers = async () => {
    await shipStationApi.get('/carriers')
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.error('Error fetching data', error.response.data);
        });
}

listCarriers();