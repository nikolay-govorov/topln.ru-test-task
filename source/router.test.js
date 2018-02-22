const fs = require('fs');
const { join } = require('path');

beforeAll(() => {
  const testFileRegexp = /^.*\.test\.js$/i;

  const routes = fs.readdirSync(join(__dirname, './routes/'))
    .filter(file => !testFileRegexp.test(file));

  routes.forEach((name) => {
    jest.mock(`./routes/${name}`, () => (_, response) => response.end(), { virtual: true });
  });
});

test('Must call routes', (done) => {
  // eslint-disable-next-line global-require
  const router = require('./router');

  router.handle({ url: '/', method: 'GET' }, { end: done });
});
