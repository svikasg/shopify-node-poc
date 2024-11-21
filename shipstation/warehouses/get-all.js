const { shipStationApi } = require("../api");

const getAllWarehouses = async () => {
    await shipStationApi.get('/warehouses')
        .then(response => response.data)
        .catch(error => { throw new Error(error.response.data) });
};

module.exports = {
    getAllWarehouses
}
