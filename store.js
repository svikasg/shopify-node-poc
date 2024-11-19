const express = require('express');
const app = express();
const getRawBody = require('raw-body');
const crypto = require('crypto');
const secretKey = '02234ea9833ddb55c050666b355e7471c5af9ba201a9c6667fb146f99ab307d0';

app.post('/webhooks/cart/create', async (req, res) => {
    const hmac = req.get('X-Shopify-Hmac-Sha256');

    const body = await getRawBody(req);

    const hash = crypto
        .createHmac('sha256', secretKey)
        .update(body, 'utf8', 'hex')
        .digest('base64');

    if (hash === hmac) {
        const order = JSON.parse(body.toString());
        console.log(order);
        res.sendStatus(200);
    } else {
        console.log('Danger! Not from Shopify!');
        res.sendStatus(403);
    }
});

app.post('/webhooks/checkout/delete', async (req, res) => {
    const hmac = req.get('X-Shopify-Hmac-Sha256');

    const body = await getRawBody(req);

    const hash = crypto
        .createHmac('sha256', secretKey)
        .update(body, 'utf8', 'hex')
        .digest('base64');

    if (hash === hmac) {
        const order = JSON.parse(body.toString());
        console.log(order);
        res.sendStatus(200);
    } else {
        console.log('Danger! Not from Shopify!');
        res.sendStatus(403);
    }
});

app.listen(3000, () => console.log('Shopify BE app listening on port 3000!'))
