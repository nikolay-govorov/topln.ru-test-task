const config = require('../lib/config');

module.exports = (request, response) => {
  const data = {};

  if (config.get('env') === 'production') {
    // eslint-disable-next-line import/no-unresolved, global-require
    const manifest = require('../../dist/manifest.json');

    data.script = `/dist/${manifest['main.js']}`;
  } else {
    data.script = '/dist/build.js';
  }

  response.render('index', data);
};
