var express = require("express");
const sateliteController = require("../Controllers/sateliteController");
var router = express.Router();

/* GET home page. */
router.get("/satelites", sateliteController.index);
router.get("/crear", sateliteController.crear);
router.post("/", sateliteController.guardar);
router.get("/editar/:id", sateliteController.editar);
router.post("/eliminar/:id", sateliteController.eliminar);
router.post("/actualizar", sateliteController.actualizar);

module.exports = router;
