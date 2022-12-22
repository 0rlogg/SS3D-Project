var conexion = require('../config/conexion');
var planeta = require('../model/app');
var satelite = require('../model/satelites')
module.exports={

index:function(req,res){

    planeta.obtener(conexion,function (err, datos){
        console.log(datos);
        res.render('Aplication/index', {title: 'SolarSystem', planetas:datos});
        });
    
    satelite.obtener(conexion,function (err, datos){
        console.log(datos);
        res.render('Aplication/index', {title: 'SolarSystem', satelites:datos});
        });
    },
    
    guardar:function(req,res){
        console.log(req.body);
        
        planeta.insertar(conexion,req.body,function (err){
        res.redirect('Aplication');});
    },
}


