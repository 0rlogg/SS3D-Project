var conexion = require('../config/conexion');
var planeta = require('../model/admin');
var satelite = require('../model/satelites');

module.exports = {

    index:function(req,res){

        planeta.obtener(conexion,function (err, datos){
            console.log(datos);
            res.render('administration/index', {title: 'Admin', planetas:datos});
        });
    },
    crear:function(req,res){
        res.render('administration/crear');
    },
    guardar:function(req,res){
        res.send(req.body);
    }
}