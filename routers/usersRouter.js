
const express = require('express');
const { getUsers } = require('../controllers/usersController');




const router = express.Router();

//login page
router.get('/', getUsers);

module.exports = router;