var express = require('express');
var router = express.Router();
const aplicationController = require('../Controllers/aplicationController');
const administrationController = require('../Controllers/administrationController');
const sateliteController = require('../Controllers/sateliteController');
const estrellaController = require('../Controllers/estrellaController');

router.get('/', aplicationController.index);
router.get('/administration', administrationController.index);
router.get('/satelites', sateliteController.index);
router.get('/estrellas', estrellaController.index);

module.exports = router;
