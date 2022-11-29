var express = require('express');
var router = express.Router();
const administrationController = require('../Controllers/administrationController');
var multer = require('multer');
var fecha = Date.now();
var rutaAlmacenamiento = multer.diskStorage({

     destination:function(request, file, callback){
         callback(null, './public/img/uploads/');
     },
     filename:function(request, file, callback){
         console.log(file);
        callback(null, fecha + "_" + file.originalname);
    }
 });
 
 var cargar = new multer(({storage:rutaAlmacenamiento}));


/* GET home page. */
router.get('/administration', administrationController.index);
router.get('/crear', administrationController.crear);
router.get('/editar/:id', administrationController.editar);
router.post('/', cargar.single("archivo"), administrationController.guardar);
router.post('/eliminar/:id', administrationController.eliminar);
router.post('/actualizar', cargar.single("archivo"), administrationController.actualizar);

module.exports = router;

