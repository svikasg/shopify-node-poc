const { shipStationApi } = require("../api");

const createOrderLabel = async (orderData) => {
    return shipStationApi.post('/orders/createlabelfororder', JSON.stringify(orderData))
        .then(response => response.data)
        .catch((error) => console.log(error.response.data));
}

module.exports = {
    createOrderLabel
}