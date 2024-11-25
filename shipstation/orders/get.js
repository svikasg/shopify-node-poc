const { shipStationApi } = require('../api');

const getOrder = async (orderId) => {
    return shipStationApi.post(`/orders/${orderId}`)
        .then(response => response.data)
        .catch(error => { throw new Error(error.response.data) });
};

module.exports = {
    getOrder
}