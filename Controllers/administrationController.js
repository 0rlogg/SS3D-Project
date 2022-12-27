var conexion = require('../config/conexion');
var planeta = require('../model/admin');
var borrar = require("fs");
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
        console.log(req.body);
        planeta.insertar(conexion,req.body,function (err){
        res.redirect('administration');});
    },
    eliminar:function(req,res){

        planeta.retornarDatosID(conexion, req.params.id, function(err, registros){
            
            var nombreimg = "public/img/" + (registros[0].imagen);            
            if(borrar.existsSync(nombreimg)){
                borrar.unlink(nombreimg);
            }
            planeta.borrar(conexion, req.params.id, function(err){
                res.redirect('/administration');
            });
        });
    },
    editar:function(req,res){
        planeta.retornarDatosID(conexion, req.params.id, function(err, registros){
            console.log(registros[0]);
            res.render('administration/editar', {planeta:registros[0]});});
    },
    actualizar:function(req,res){
        console.log(req.body.nombre);

        if(req.body.nombre){
        planeta.actualizar(conexion,req.body,function(err){
            });
        }
        res.redirect('/administration');
    } 

}

