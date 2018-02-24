const dotenv = require('dotenv');
const convict = require('convict');

dotenv.config();

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },

  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3000,
    env: 'PORT',
  },

  db: {
    doc: 'Database connect url',
    format: String,
    default: '',
    env: 'DATABASE_URL',
  },
});

config.validate({ allowed: 'strict' });

module.exports = config;
