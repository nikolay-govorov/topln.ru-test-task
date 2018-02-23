const config = require('./config');

test('Must be function', () => {
  expect(typeof config).toBe('object');
  expect(typeof config.get).toBe('function');
  expect(typeof config.set).toBe('function');
});

test('Must load env vars or set default value', () => {
  const { NODE_ENV } = process.env;

  expect(config.get('env')).toBe(NODE_ENV || 'development');
});
