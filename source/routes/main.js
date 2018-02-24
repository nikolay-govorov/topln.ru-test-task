// eslint-disable-next-line import/no-unresolved
const manifest = require('../../dist/manifest.json');

module.exports = (request, response) => {
  response.render('index', {
    title: 'TopLN.ru | Test task', script: `/dist/${manifest['main.js']}`,
  });
};
