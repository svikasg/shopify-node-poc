const { shipStationApi } = require('../api');

const deleteOrder = async (orderId) => {
    await shipStationApi.delete(`/orders/${orderId}`)
        .then(response => response.data)
        .catch(error => { throw new Error(error.response.data) });
};

module.exports = {
    deleteOrder
}
