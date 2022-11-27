var express = require('express');
var router = express.Router();
const administrationController = require('../Controllers/administrationController');

/* GET home page. */
router.get('/administration', administrationController.index);
router.get('/crear', administrationController.crear);
router.post("/", administrationController.guardar);

module.exports = router;
