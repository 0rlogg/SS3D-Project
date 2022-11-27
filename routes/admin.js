var express = require('express');
var router = express.Router();
const administrationController = require('../Controllers/administrationController');

/* GET home page. */
router.get('/administration', administrationController.index);

module.exports = router;
