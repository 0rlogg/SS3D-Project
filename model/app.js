module.exports = {
    obtenerMercurio:function(conexion,funcion){
        conexion.query("SELECT mercurio FROM Planetas",funcion);
    },
    obtenerVenus:function(conexion,funcion){
        conexion.query("SELECT * FROM Planetas",funcion);
    },
    obtenerTierra:function(conexion,funcion){
        conexion.query("SELECT * FROM Planetas",funcion);
    },
    obtenerMarte:function(conexion,funcion){
        conexion.query("SELECT * FROM Planetas",funcion);
    },
    obtenerJupiter:function(conexion,funcion){
        conexion.query("SELECT * FROM Planetas",funcion);
    },
    obtenerSaturno:function(conexion,funcion){
        conexion.query("SELECT * FROM Planetas",funcion);
    },
    obtenerUrano:function(conexion,funcion){
        conexion.query("SELECT * FROM Planetas",funcion);
    },
    obtenerPluton:function(conexion,funcion){
        conexion.query("SELECT * FROM Planetas",funcion);
    }
}   