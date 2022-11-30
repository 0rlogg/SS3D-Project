var conexion = require('../config/conexion');
const admin = require('../model/admin');
var planeta = require('../model/admin');
var satelite = require('../model/satelites');
var borrar = require("fs");

module.exports={

    index:function(req, res){
        res.render('Aplication/index', { title: 'SolarSystem' });
    }    
}