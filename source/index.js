const { join } = require('path');
const express = require('express');

const router = require('./router');

const { PORT: port = 8080 } = process.env;

const app = express();

app.set('view engine', 'pug');
app.set('views', 'source/layouts');

['dist', 'public'].forEach((folder) => {
  router.use(`/${folder}/`, express.static(join(__dirname, '..', folder)));
});

app.use(router);

app.listen(port, (error) => {
  if (error) {
    console.error(error); return;
  }

  console.log(`The server listens to port ${port}`);
});
