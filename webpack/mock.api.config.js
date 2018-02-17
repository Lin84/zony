const path = require('path');
const config = {
    '/loan-rating-a': {
        data: './../src/mock-api/loan-rating-a.json'
    }
}

for (let item in config) {
    if (config.hasOwnProperty(item)) config[item].path = path.resolve(__dirname, config[item].data);
}
module.exports = config;
