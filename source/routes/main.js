// eslint-disable-next-line import/no-unresolved
const manifest = require('../../dist/manifest.json');

module.exports = (request, response) => {
  response.render('index', {
    script: `/dist/${manifest['main.js']}`,
  });
};
