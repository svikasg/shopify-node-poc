const { shipStationApi } = require("../api");

const deleteWarehouse = async (warehouseId) => {
    await shipStationApi.delete(`/warehouses/${warehouseId}`)
        .then(response => response.data)
        .catch(error => { throw new Error(error.response.data) });
};

module.exports = {
    deleteWarehouse
}
