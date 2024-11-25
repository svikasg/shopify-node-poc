const { shipStationApi } = require("../api")

const listServices = async (params) => {
    await shipStationApi.get('/carriers/listservices', { params })
        .then(response => response.data)
        .catch(error => { throw new Error(error.response.data) });
}

module.exports = {
    listServices
}