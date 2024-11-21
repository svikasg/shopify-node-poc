const { shipStationApi } = require("../api");

const createWarehouse = async (warehouseData) => {
    return shipStationApi.post('/warehouses/createwarehouse', JSON.stringify(warehouseData))
        .then(response => response.data)
        .catch(() => { throw new Error("Error creating warehouse") });
};

module.exports = {
    createWarehouse
}