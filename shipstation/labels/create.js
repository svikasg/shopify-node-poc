const { shipStationApi, orderLabelData } = require("../api");

const createOrderLabel = async (orderId) => {
    await shipStationApi.post('/orders/createlabelfororder', JSON.stringify({ ...orderLabelData, orderId }))
        .then(response => response.data)
        .catch(error => { throw new Error(error.response.data) });
}

createOrderLabel(25889713);