const axios = require('axios');
const { getAuthToken } = require("./utils/auth");

const shipStationApi = axios.create({
    baseURL: "https://ssapi.shipstation.com",
    headers: {
        "Host": 'ssapi.shipstation.com',
        "Authorization": `Basic ${getAuthToken()}`,
        "Content-Type": "application/json"
    }
});

const sampleOrderData = {
    "orderNumber": new Date().valueOf(),
    "orderKey": new Date().valueOf().toString(),
    "orderDate": "2024-11-19T08:46:27.0000000",
    "paymentDate": "2024-11-19T08:46:27.0000000",
    "shipByDate": "2024-11-22T00:00:00.0000000",
    "orderStatus": "awaiting_shipment",
    "billTo": {
        "name": "The President",
        "company": "White House",
        "street1": "Test Address",
        "street2": null,
        "street3": null,
        "city": "Washington",
        "state": "WA",
        "postalCode": "98430",
        "country": "US",
        "phone": null,
        "residential": null
    },
    "shipTo": {
        "name": "The President",
        "company": "White House",
        "street1": "Test Address",
        "street2": null,
        "street3": null,
        "city": "Washington",
        "state": "WA",
        "postalCode": "98430",
        "country": "US",
        "phone": null,
        "residential": null
    },
    "items": [{
        "orderItemId": 192210956,
        "lineItemKey": "vd08-MSLbtx",
        "sku": "ABC123",
        "name": "Test item #1",
        "imageUrl": null,
        "weight": {
            "value": 24,
            "units": "ounces"
        },
        "quantity": 2,
        "unitPrice": 99.99,
        "taxAmount": 2.5,
        "shippingAmount": 5,
        "warehouseLocation": "Aisle 1, Bin 7",
        "options": [{
            "name": "Size",
            "value": "Large"
        }],
        "productId": null,
        "fulfillmentSku": null,
        "adjustment": false,
        "upc": "32-65-98",
        "createDate": "2016-02-16T15:16:53.707",
        "modifyDate": "2016-02-16T15:16:53.707"
    }],
    "weight": {
        "value": 10,
        "units": 'ounces',
        "WeightUnits": 1
    },
    "packageCode": "package"
}

const wareHouseAData = {
    "warehouseName": "Ship From Location Warehouse A",
    "originAddress": {
        "name": "Warehouse A",
        "company": "Warehouse A",
        "street1": "1128 Pano Square",
        "street2": null,
        "street3": null,
        "city": "Las Cruces",
        "state": "NM",
        "postalCode": "80012",
        "country": "US",
        "phone": "512-111-2222",
        "residential": false
    },
    "returnAddress": null,
    "isDefault": false
}

const warehouseBData = {
    "warehouseName": "Ship From Location Warehouse B",
    "originAddress": {
        "name": "Warehouse B",
        "company": "Warehouse B",
        "street1": "828 Litus Grove",
        "street2": null,
        "street3": null,
        "city": "Las Cruces",
        "state": "NM",
        "postalCode": "80012",
        "country": "US",
        "phone": "512-111-2222",
        "residential": false
    },
    "returnAddress": null,
    "isDefault": false
}

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

module.exports = {
    shipStationApi,
    sampleOrderData,
    wareHouseAData,
    warehouseBData,
    orderLabelData
}