module.exports = {
  obtener: function (conexion, funcion) {
    conexion.query("SELECT * FROM Planetas", funcion);
  },
  insertar: function (conexion, datos, funcion) {
    conexion.query(
      "INSERT INTO Planetas (nombre, descripcion, textura, numsatelites) VALUES (?,?,?,?)",
      [datos.nombre, datos.descripcion, datos.textura, datos.numsatelites],
      funcion
    );
  },
  retornarDatosID: function (conexion, id, funcion) {
    conexion.query("SELECT * FROM Planetas WHERE id=?", [id], funcion);
  },
  borrar: function (conexion, id, funcion) {
    conexion.query("DELETE FROM Planetas WHERE id=?", [id], funcion);
  },
  actualizar: function (conexion, datos, funcion) {
    conexion.query(
      "UPDATE Planetas SET nombre = ?, descripcion = ?, textura = ?, numsatelites = ? WHERE id = ?",
      [
        datos.nombre,
        datos.descripcion,
        datos.textura,
        datos.numsatelites,
        datos.id
      ],
      funcion
    );
  }
};
