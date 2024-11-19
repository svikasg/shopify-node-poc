const { shipStationApi, sampleOrderData } = require('../api');

const createOrder = async () => {
    await shipStationApi.post('/orders/createorder', JSON.stringify(sampleOrderData))
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.error('Error fetching data', error.response.data);
        });
};

createOrder();
