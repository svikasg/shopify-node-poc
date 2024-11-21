const { shipStationApi } = require("../api");

const listCarriers = async () => {
    return shipStationApi.get('/carriers')
        .then(response => response.data)
        .catch(error => { throw new Error(error.response.data) });
}

module.exports = {
    listCarriers
}