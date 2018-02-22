const { Router } = require('express');

const router = new Router();

const routes = [
  { name: 'main', method: 'get', path: '/' },
];

routes.forEach(({ name, method, path }) => {
  router[method](path, require(`./routes/${name}`));
});

module.exports = router;
