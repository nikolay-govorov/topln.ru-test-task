const { Router } = require('express');

const router = new Router();

router.use('/api', require('./routes/main'));
router.get('/', require('./routes/main'));

module.exports = router;
