const { Router } = require('express');

const router = new Router();

router.use('/api/', require('./routes/rest'));
router.get('/', require('./routes/main'));

module.exports = router;
