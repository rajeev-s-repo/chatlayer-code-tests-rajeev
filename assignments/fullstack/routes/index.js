var router = require('express').Router();

router.use('/api/messages', require('./Api/Messages'));


module.exports = router;