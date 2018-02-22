const mainRoute = require('./main');

test('Must be function', () => {
  expect(typeof mainRoute).toBe('function');
});

test('Must return "Hello world" string', () => {
  const send = jest.fn();

  mainRoute({}, { send });

  expect(send.mock.calls).toEqual([['Hello world']]);
});
