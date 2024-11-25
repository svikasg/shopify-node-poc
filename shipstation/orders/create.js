const { shipStationApi } = require('../api');

const createOrder = async (orderData) => {
    return shipStationApi.post('/orders/createorder', JSON.stringify(orderData))
        .then(response => response.data)
        .catch(() => { throw new Error("Error creating order") });
};

module.exports = {
    createOrder
}
