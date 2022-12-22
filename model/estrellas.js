module.exports = {
    obtener:function(conexion,funcion){
        conexion.query("SELECT * FROM Estrellas",funcion);
    },
    insertar:function(conexion, datos, funcion){
        conexion.query("INSERT INTO Estrellas (nombreestrella, descripcion, textura) VALUES (?,?,?)",
         [datos.nombreestrella,datos.descripcion,datos.textura],funcion);
    },
    retornarDatosID:function(conexion, id, funcion){
        conexion.query("SELECT * FROM Estrellas WHERE id=?",[id],funcion);

    },
    borrar:function(conexion, id, funcion){
        conexion.query("DELETE FROM Estrellas WHERE id=?", [id], funcion);

    },
    actualizar:function(conexion, datos, funcion){
        conexion.query("UPDATE Estrellas SET nombreestrella = ?, descripcion = ?, textura = ? WHERE id = ?",
         [datos.nombreestrella, datos.descripcion, datos.textura, datos.id],funcion);
    }
} 