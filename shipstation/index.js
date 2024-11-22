const { wareHouseAData, sampleOrderData, orderLabelData } = require("./api");
const { createOrder } = require("./orders/create");
const { createWarehouse } = require("./warehouses/create");
const { createOrderLabel } = require("./labels/create");
const { base64ToPDF } = require("./utils");

// Use "stamps_com" for carrierCode

// Create a Warehouse, create and Order and then create a Label for that Order
const createWarehouseOrderAndLabel = async () => {
    await createWarehouse(wareHouseAData)
        .then(({ warehouseId }) => createOrder({ ...sampleOrderData, warehouseId }))
        .then(({ orderId }) => createOrderLabel({ ...orderLabelData, orderId }))
        .then(({ labelData }) => base64ToPDF(labelData, `./shipstation/printed-labels/${Date().valueOf()}.pdf`))
        .catch((error) => console.log(error))
}

// Create and Order and then create a Label for that Order (Warehouse ID already exists)
const createOrderAndLabel = async () => {
    await createOrder({ ...sampleOrderData, "warehouseId": 316195 })
        .then(({ orderId }) => createOrderLabel({ ...orderLabelData, orderId }))
        .then(({ labelData }) => base64ToPDF(labelData, `./shipstation/printed-labels/${Date().valueOf()}.pdf`))
        .catch((error) => console.log(error))
}

module.exports = {
    createOrderAndLabel,
    createWarehouseOrderAndLabel
}

