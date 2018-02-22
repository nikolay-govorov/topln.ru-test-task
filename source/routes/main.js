const manifest = require('../../dist/manifest');

module.exports = (request, response) => {
  response.render('index', {
    title: 'TopLN.ru | Test task', script: manifest['main.js'],
  });
};
