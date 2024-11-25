const axios = require('axios');
const { getAuthToken } = require("./utils/auth");

const date = new Date();
const tomorrow = new Date(+new Date() + 86400000);

const shipStationApi = axios.create({
    baseURL: "https://ssapi.shipstation.com",
    headers: {
        "Host": 'ssapi.shipstation.com',
        "Authorization": `Basic ${getAuthToken()}`,
        "Content-Type": "application/json"
    }
});

const sampleOrderData = {
    "orderNumber": date.valueOf(),
    "orderKey": date.valueOf().toString(),
    "orderDate": date.toISOString(),
    "paymentDate": date.toISOString(),
    "shipByDate": tomorrow.toISOString(),
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
        "createDate": date.toISOString(),
        "modifyDate": date.toISOString()
    }]
};

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
};

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
};

const orderLabelData = {
    "packageCode": "package",
    "carrierCode": "stamps_com",
    "serviceCode": "usps_priority_mail",
    "confirmation:": "none",
    "shipDate": tomorrow.toISOString(),
    "weight": {
        "value": 5,
        "units": "ounces",
    },
    "dimensions": {
        "length": 2.5,
        "width": 3.4,
        "height": 6.7,
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