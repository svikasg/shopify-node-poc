const { shipStationApi } = require("../api");

const markOrderAsShipped = async (orderData) => {
    return shipStationApi.post('/orders/markasshipped', JSON.stringify(orderData))
        .then(response => response.data)
        .catch(error => { throw new Error(error.response.data) });
}

module.exports = {
    markOrderAsShipped
}