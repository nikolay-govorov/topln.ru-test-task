const { Router } = require('express');

const router = new Router();

router.get('/stats/', (request, response) => {
  response.send('get all records');
});

router.post('/stats/', (request, response) => {
  response.send('create record');
});

router.put('/stats/:id', (request, response) => {
  response.send('update record');
});

router.delete('/stats/:id', (request, response) => {
  response.send('delete record');
});

module.exports = router;
