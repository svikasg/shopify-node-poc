const { shipStationApi } = require("../api");

const getProduct = async (productId) => {
    await shipStationApi.get(`/product/${productId}`)
        .then(response => response.data)
        .catch(error => { throw new Error(error.response.data) });
};

module.exports = {
    getProduct
}
