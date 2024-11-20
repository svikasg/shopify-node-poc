const { shipStationApi } = require("../api")

const listPackages = async () => {
    await shipStationApi.get('/carriers/listpackages', {
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

listPackages();