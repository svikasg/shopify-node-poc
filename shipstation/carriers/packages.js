const { shipStationApi } = require("../api")

const listPackages = async (params) => {
    return shipStationApi.get('/carriers/listpackages', { params })
        .then(response => response.data)
        .catch(error => { throw new Error(error.response.data) });
}

module.exports = {
    listPackages
}