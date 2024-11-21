const { shipStationApi } = require('../api');

const createOrder = async (orderData) => {
    await shipStationApi.post('/orders/createorder', JSON.stringify(orderData))
        .then(response => response.data)
        .catch(error => { throw new Error(error.response.data) });
};

module.exports = {
    createOrder
}
