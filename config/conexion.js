const mysql = require('mysql');
var conexion = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    database:'sistemasolar'
});

conexion.connect(
    (err)=>{
        if (!err){
            console.log('EXITO conexion establecida')
        }else {
            console.log('ERROR conexion rechazada')
        }
    }
);

module.exports=conexion;