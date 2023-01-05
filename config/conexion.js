const mysql = require('mysql');
var conexion = mysql.createConnection({

    host:'ss3dbd.database.windows.net',
    user:'dmiranda',
    password:'DogWolf1506',
    database:'ss3db'
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
