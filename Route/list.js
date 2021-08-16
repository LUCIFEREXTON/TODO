const express = require('express');
const router = express.Router()
const { add, del, getlist } = require('../Controller/list')

router.post('/add', add);
router.post('/delete', del);
router.post('/getlists', getlist);


module.exports = router;