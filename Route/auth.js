const express = require('express');
const router = express.Router()
const { login, signup, getuser } = require('../Controller/auth')

router.post('/login', login);
router.post('/signup', signup);
router.post('/userdata', getuser);

module.exports = router;