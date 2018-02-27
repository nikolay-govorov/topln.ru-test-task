const config = require('../lib/config');

module.exports = (request, response) => {
  const data = {};

  if (config.get('env') === 'development') {
    data.script = '/dist/build.js';
  } else {
    // eslint-disable-next-line import/no-unresolved, global-require
    const manifest = require('../../dist/manifest.json');

    data.script = `/dist/${manifest['main.js']}`;
  }

  response.render('index', data);
};
