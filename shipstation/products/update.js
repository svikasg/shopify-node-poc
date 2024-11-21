const { shipStationApi } = require("../api");

const updateProduct = async (productId, productData) => {
    await shipStationApi.get(`/product/${productId}`, JSON.stringify(productData))
        .then(response => response.data)
        .catch(error => { throw new Error(error.response.data) });
};

module.exports = {
    updateProduct
}
