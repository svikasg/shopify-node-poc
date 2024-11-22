const pg = require('pg');

const pool = new pg.Pool({
    user: 'sgopal',
    host: 'localhost',
    database: 'sgopal',
    password: 'shopify',
    port: 5432
});

module.exports = pool;
