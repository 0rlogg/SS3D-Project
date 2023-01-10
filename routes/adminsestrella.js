var express = require("express");
var router = express.Router();
const estrellaController = require("../Controllers/estrellaController");
var multer = require("multer");
var fecha = Date.now();
var rutaAlmacenamiento = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, "./public/img/uploads/");
  },
  filename: function (request, file, callback) {
    console.log(file);
    callback(null, fecha + "_" + file.originalname);
  }
});

var cargar = new multer({ storage: rutaAlmacenamiento });

/* GET home page. */
router.get("/estrellas", estrellaController.index);
router.get("/crear", estrellaController.crear);
router.post("/", cargar.single("archivo"), estrellaController.guardar);
router.get("/editar/:id", estrellaController.editar);
router.post("/eliminar/:id", estrellaController.eliminar);
router.post(
  "/actualizar",
  cargar.single("archivo"),
  estrellaController.actualizar
);

module.exports = router;
