const { Router } = require('express');

const db = require('../lib/db');

const router = new Router();

router.get('/stats/:id', async (request, response) => {
  const connection = await db;

  const { id } = request.params;

  if (Number.isNaN(Number(id))) {
    response.status(400);
    response.send({ error: 'ID must be number' }); return;
  }

  connection.query(`SELECT * FROM stats WHERE partner_id = ${id}`, (error, results, fields) => {
    if (error) {
      throw error;
    }

    response.send(results);
  });
});

module.exports = router;
