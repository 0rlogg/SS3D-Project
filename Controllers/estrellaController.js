var conexion = require("../config/conexion");
var estrella = require("../model/estrellas");
var borrar = require("fs");
module.exports = {
  index: function (req, res) {
    estrella.obtener(conexion, function (err, datos) {
      console.log(datos);
      res.render("estrellas/index", {
        title: "Administration estrellas",
        estrellas: datos
      });
    });
  },

  crear: function (req, res) {
    res.render("estrellas/crear");
  },

  guardar: function (req, res) {
    console.log(req.body);
    estrella.insertar(conexion, req.body, function (err) {
      res.redirect("estrellas");
    });
  },

  eliminar: function (req, res) {
    estrella.retornarDatosID(
      conexion,
      req.params.id,
      function (err, registros) {
        var nombreimg = "public/img/" + registros[0].imagen;
        if (borrar.existsSync(nombreimg)) {
          borrar.unlink(nombreimg);
        }
        estrella.borrar(conexion, req.params.id, function (err) {
          res.redirect("/estrellas");
        });
      }
    );
  },

  editar: function (req, res) {
    estrella.retornarDatosID(
      conexion,
      req.params.id,
      function (err, registros) {
        console.log(registros[0]);
        res.render("estrellas/editar", { estrella: registros[0] });
      }
    );
  },

  actualizar: function (req, res) {
    console.log(req.body.nombreestrella);

    if (req.body.nombreestrella) {
      estrella.actualizar(conexion, req.body, function (err) {});
    }
    res.redirect("/estrellas");
  }
};
