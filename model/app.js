module.exports = {
    obtener:function(conexion,funcion){
        conexion.query("SELECT * FROM Planetas",funcion);
    },

    obtenersatelites:function(conexion,funcion){
        conexion.query("SELECT * FROM Satelites",funcion);
    },

    obtenerestrellas:function(conexion,funcion){
        conexion.query("SELECT * FROM Estrellas",funcion);
    },


    insertar:function(conexion, datos, funcion){
        conexion.query("INSERT INTO Planetas (nombre, descripcion, textura, numsatelites) VALUES (?,?,?,?)",
         [datos.nombre,datos.descripcion,datos.archivo,datos.numsatelites ],funcion);    
    },

}