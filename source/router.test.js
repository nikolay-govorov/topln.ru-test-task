const fs = require('fs');
const { join } = require('path');

beforeAll(() => {
  const testFileRegexp = /^.*\.test\.js$/i;

  const routes = fs.readdirSync(join(__dirname, './routes/'))
    .filter(file => !testFileRegexp.test(file));

  routes.forEach((name) => {
    const path = `./routes/${name}`;

    jest.mock(path);

    // eslint-disable-next-line import/no-dynamic-require, global-require
    const route = require(path);

    route.mockImplementation((_, response) => response.end());
  });
});

test('Must call routes', (done) => {
  // eslint-disable-next-line global-require
  const router = require('./router');

  router.handle({ url: '/', method: 'GET' }, { end: done });
});
