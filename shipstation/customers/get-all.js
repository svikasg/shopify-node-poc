const { shipStationApi } = require("../api");

const getAllCustomers = async () => {
    await shipStationApi.get('/customers')
        .then(response => response.data)
        .catch(error => { throw new Error(error.response.data) });
};

module.exports = {
    getAllCustomers
}