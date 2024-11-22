const { shipStationApi } = require("../api");

const getAllProducts = async () => {
    return shipStationApi.get('/products')
        .then(response => response.data)
        .catch(error => { throw new Error(error.response.data) });
};

module.exports = {
    getAllProducts
}