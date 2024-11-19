const API_KEY = "f11d313162d24362bcf8fc1e812f0033";
const API_SECRET = "dc4f3766f6d54d3eb198aacd8a856742";

const getAuthToken = () => Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64');

module.exports = {
    getAuthToken
}