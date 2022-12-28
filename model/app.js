module.exports = {
    obtener:function(conexion,funcion){
        conexion.query("SELECT * FROM Planetas",funcion);
    },
    
    insertar:function(conexion, datos, funcion){
        conexion.query("INSERT INTO Planetas (nombre, descripcion, textura, numsatelites) VALUES (?,?,?,?)",
         [datos.nombre,datos.descripcion,datos.archivo,datos.numsatelites ],funcion);    
    },

}