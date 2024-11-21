const { shipStationApi } = require("../api");

const createWarehouse = async (warehouseData) => {
    await shipStationApi.post('/warehouses/createwarehouse', JSON.stringify(warehouseData))
        .then(response => response.data)
        .catch(error => { throw new Error(error.response.data) });
};

module.exports = {
    createWarehouse
}