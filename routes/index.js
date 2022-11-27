var express = require('express');
var router = express.Router();
const aplicationController = require('../Controllers/aplicationController');
const administrationController = require('../Controllers/administrationController');

/* GET home page. */
router.get('/Administration', administrationController.index);
/* GET home page. */
router.get('/', aplicationController.index);

module.exports = router;
