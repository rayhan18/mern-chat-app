
const express = require('express');
const { getInbox } = require('../controllers/inboxController');




const router = express.Router();

//login page
router.get('/', getInbox);

module.exports = router;