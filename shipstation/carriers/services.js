const { shipStationApi } = require("../api")

const listServices = async () => {
    await shipStationApi.get('/carriers/listservices', {
        params: {
            carrierCode: "stamps_com"
        }
    })
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.error('Error fetching data', error.response.data);
        });
}

listServices();