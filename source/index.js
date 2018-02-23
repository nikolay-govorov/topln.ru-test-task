const { join } = require('path');
const express = require('express');

const config = require('./lib/config');
const router = require('./router');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'source/layouts');

['dist', 'public'].forEach((folder) => {
  router.use(`/${folder}/`, express.static(join(__dirname, '..', folder)));
});

app.use(router);

app.listen(config.get('port'), (error) => {
  if (error) {
    console.error(error); return;
  }

  console.log(`The server listens to port ${config.get('port')}`);
});
