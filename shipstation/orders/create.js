const { shipStationApi, sampleOrderData } = require('../api');
const { createOrderLabel } = require('./create-label');

const createOrder = async () => {
    await shipStationApi.post('/orders/createorder', JSON.stringify(sampleOrderData))
        .then(response => {
            console.log(response.data);

            createOrderLabel(response.data.orderId)
        }).catch(error => {
            console.error('Error', error.response.data);
        });
};

createOrder();
