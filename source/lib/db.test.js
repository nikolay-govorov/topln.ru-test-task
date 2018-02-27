const db = require('./db');

test('Must be Object', async () => {
  await db;

  expect(typeof db).toBe('object');
});
