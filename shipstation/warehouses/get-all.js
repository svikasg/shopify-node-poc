const { shipStationApi } = require("../api");

const getAllWarehouses = async () => {
    return shipStationApi.get('/warehouses')
        .then(response => { console.log(response.data) })
        .catch(error => { throw new Error(error.response.data) });
};

// module.exports = {
//     getAllWarehouses
// }

getAllWarehouses();
