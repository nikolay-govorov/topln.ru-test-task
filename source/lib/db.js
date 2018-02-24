const { Client } = require('pg');

const config = require('./config');

module.exports = new Client(config.get('db'));
