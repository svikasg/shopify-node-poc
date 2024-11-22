const { shipStationApi } = require('../api');

const deleteOrder = async (orderId) => {
    return shipStationApi.delete(`/orders/${orderId}`)
        .then(response => response.data)
        .catch(error => { throw new Error(error.response.data) });
};

module.exports = {
    deleteOrder
}
