jest.mock('../../dist/manifest.json', () => ({ 'main.js': 'main.hash.js' }), { virtual: true });

const mainRoute = require('./main');

test('Must be function', () => {
  expect(typeof mainRoute).toBe('function');
});

test('Must return markup', () => {
  const render = jest.fn();

  mainRoute({}, { render });

  expect(render.mock.calls)
    .toEqual([['index', { script: '/dist/main.hash.js' }]]);
});
