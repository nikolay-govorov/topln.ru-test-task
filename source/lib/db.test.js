const { Client } = require('pg');

const db = require('./db');

test('Must be instanceOf pg.Client', () => {
  expect(db).toBeInstanceOf(Client);
});
