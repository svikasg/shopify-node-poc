const { shipStationApi } = require("../api");
const fs = require('fs');

const orderLabelData = {
    "carrierCode": "stamps_com",
    "serviceCode": "usps_priority_mail",
    "confirmation:": "none",
    "shipDate": "2024-11-22T00:00:00.0000000",
    "weight": {
        "value": 5,
        "units": "ounces",
    },
    "dimensions": {
        "length": 0,
        "width": 0,
        "height": 0,
        "units": "centimeters"
    },
    "insuranceOptions": null,
    "internationalOptions": null,
    "advancedOptions": null,
    "testLabel": true
};

const base64ToPDF = (base64String, outputPath) => {
    const buffer = Buffer.from(base64String, 'base64');
    fs.writeFileSync(outputPath, buffer);
}

const createOrderLabel = async (orderId) => {
    await shipStationApi.post('/orders/createlabelfororder', JSON.stringify({ orderId, ...orderLabelData }))
        .then(response => {
            console.log(response.data);
            
            base64ToPDF(response.data.labelData, 'label.pdf');
        }).catch(error => {
            console.error('Error fetching data', error.response.data);
        });
}

module.exports = {
    createOrderLabel
}