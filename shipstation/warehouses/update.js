const { shipStationApi } = require("../api");

const updateWarehouse = async (warehouseId, warehouseData) => {
    return shipStationApi.put(`/warehouses/${warehouseId}`, JSON.stringify({ ...warehouseData, warehouseId }))
        .then(response => response.data)
        .catch(error => { throw new Error(error.response.data) });
};

module.exports = {
    updateWarehouse
}
