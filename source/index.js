const http = require('http');

const { PORT: port = 8080 } = process.env;

const app = http.createServer((response, request) => {
  request.write('Hello Topln.ru');

  request.end();
});

app.listen(port, (error) => {
  if (error) {
    console.error(error); return;
  }

  console.log(`The server listens to port ${port}`);
});
