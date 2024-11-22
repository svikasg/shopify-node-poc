require('dotenv').config();

const express = require('express');
const app = express();
const getRawBody = require('raw-body');
const crypto = require('crypto');
const secretKey = process.env.SHOPIFY_WEBHOOK;
const pool = require('./db');
const port = process.env.PORT || 4000;

app.post('/webhooks/cart/create', async (req, res) => {
    const hmac = req.get('X-Shopify-Hmac-Sha256');

    const body = await getRawBody(req);

    const hash = crypto
        .createHmac('sha256', secretKey)
        .update(body, 'utf8', 'hex')
        .digest('base64');

    if (hash === hmac) {
        const order = JSON.parse(body.toString());
        const { id } = order;
        const total = order.line_items.map(item => item.price).reduce((a, b) => a + b, 0);

        pool.query('INSERT INTO cart (id, total) VALUES ($1, $2) RETURNING *', [id, total], (error, results) => {
            if (error) {
                throw error
            }
            res.status(201).send(`Cart information added with ID: ${results.rows[0].id}`)
        });
    } else {
        console.log('Danger! Not from Shopify!');
        res.sendStatus(403);
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => console.log(`Shopify BE app listening on port ${port}!`))
