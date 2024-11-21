const { shipStationApi } = require("../api");

const getAllProducts = async () => {
    await shipStationApi.get('/products')
        .then(response => response.data)
        .catch(error => { throw new Error(error.response.data) });
};

module.exports = {
    getAllProducts
}