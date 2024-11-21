const { shipStationApi } = require("../api");

const getWarehouse = async (warehouseId) => {
    return shipStationApi.get(`/warehouses/${warehouseId}`)
        .then(response => response.data)
        .catch(error => { throw new Error(error.response.data) });
};

module.exports = {
    getWarehouse
}
