var conexion = require('../config/conexion');
var planeta = require('../model/admin');

module.exports = {

    index:function(req,res){

        planeta.obtener(conexion,function (err, datos){
            console.log(datos);
            res.render('administration/index', {title: 'Admin', planetas:datos});
        });
    }

}