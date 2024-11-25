require('dotenv').config();

const getAuthToken = () => Buffer.from(`${process.env.SHIPSTATION_API_KEY}:${process.env.SHIPSTATION_API_SECRET}`).toString('base64');

module.exports = {
    getAuthToken
}