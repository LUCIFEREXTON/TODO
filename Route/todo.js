const express = require('express');
const router = express.Router()
const { add, complete, del, gettodo } = require('../Controller/todo')

router.post('/add', add);
router.post('/complete', complete);
router.post('/delete', del);
router.post('/gettodos', gettodo);

module.exports = router;