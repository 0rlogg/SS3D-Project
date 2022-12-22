module.exports = {
    obtener:function(conexion,funcion){
        conexion.query("SELECT * FROM Satelites",funcion);
    },
    insertar:function(conexion, datos, funcion){
        conexion.query("INSERT INTO Satelites (nombreplaneta, nombreluna, descripcion) VALUES (?, ?, ?);",
         [datos.nombreplaneta,datos.nombreluna, datos.descripcion],funcion);
    },
    retornarDatosID:function(conexion, id, funcion){
        conexion.query("SELECT * FROM Satelites WHERE id=?",[id],funcion);

    },
    borrar:function(conexion, id, funcion){
        conexion.query("DELETE FROM Satelites WHERE id=?", [id], funcion);

    },
    actualizar:function(conexion, datos, funcion){
        conexion.query("UPDATE Satelites SET nombreplaneta=?, nombreluna=?, descripcion=? WHERE id =?",
        [datos.nombreplaneta,datos.nombreluna, datos.descripcion, datos.id],funcion);
    }
}   