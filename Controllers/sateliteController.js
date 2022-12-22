var conexion = require('../config/conexion');
var satelite = require('../model/satelites')
module.exports = {

    index:function(req,res){

        satelite.obtener(conexion,function (err, datos){
            console.log(datos);
            res.render('satelites/index', {title: 'Administration satelites', satelites:datos});
            
        });
    },

    crear:function(req,res){
        res.render('satelites/crear');
    },

    guardar:function(req,res){
        console.log(req.body);
        satelite.insertar(conexion,req.body,function (err){
        res.redirect('satelites');});
    },
    
    eliminar:function(req,res){

        satelite.retornarDatosID(conexion, req.params.id, function(err, registros){
            satelite.borrar(conexion, req.params.id, function(err){
                res.redirect('/satelites');
            });
        });
    },

    editar:function(req,res){
        satelite.retornarDatosID(conexion, req.params.id, function(err, registros){
            console.log(registros[0]);
            res.render('satelites/editar', {satelite:registros[0]});});
    },

    actualizar:function(req,res){
        console.log(req.body.nombreplaneta);

        if(req.body.nombreplaneta){
            satelite.actualizar(conexion,req.body,function(err){
            });
        }
        res.redirect('/satelites');
    } 

}

