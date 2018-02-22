const express = require('express');

const router = require('./router');

const { PORT: port = 8080 } = process.env;

const app = express();

app.use(router);

app.listen(port, (error) => {
  if (error) {
    console.error(error); return;
  }

  console.log(`The server listens to port ${port}`);
});
