var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var logger = require("morgan");
const bcrypt = require("bcrypt-nodejs");
const session = require("express-session");
const favicon = require("express-favicon");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var adminRouter = require("./routes/admin");
var satelitesRouter = require("./routes/adminsatelite");
var estrellasRouter = require("./routes/adminsestrella");
const conexion = require("./config/conexion");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(favicon(__dirname + "/public/img/favicon.ico"));
app.use(logger("dev"));
app.use(
  session({
    secret: "ABCDEfg",
    resave: false,
    saveUninitialized: true
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/administration", adminRouter);
app.use("/satelites", satelitesRouter);
app.use("/estrellas", estrellasRouter);

//LOGIN

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const user = req.body.username;
  const pass = req.body.password;
  if (user && pass) {
    conexion.query(
      "SELECT * FROM accounts WHERE username = ?",
      [user],
      (error, results, fields) => {
        if (pass !== results[0].password) {
          res.render("login", {
            alert: true,
            alertTitle: "Error",
            alertMessage: "USUARIO y/o CONTRASEÑA incorrectas",
            alertIcon: "error",
            showConfirmButton: true,
            timer: 1500,
            ruta: "login"
          });
        } else {
          req.session.loggedin = true;
          req.session.username = results[0].username;
          res.render("login", {
            alert: true,
            alertTitle: "Conexión exitosa",
            alertMessage: "¡LOGIN CORRECTO!",
            alertIcon: "success",
            showConfirmButton: false,
            timer: 1500,
            ruta: "administration"
          });
        }
      }
    );
  } else {
    res.render("login", {
      alert: true,
      alertTitle: "error",
      alertMessage: "Ingresa el USUARIO o la CONTRASEÑA!",
      alertIcon: "warning",
      showConfirmButton: true,
      timer: 1500,
      ruta: "login"
    });
  }
});

app.use(function (req, res, next) {
  if (!req.user)
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  next();
});

//REGISTRO

app.get("/register", async (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  //let passwordhash =  bcrypt.hash(password,8);
  conexion.query(
    "INSERT INTO accounts SET ?",
    { username: username, password: password, email: email },
    (error, results) => {
      if (error) {
        console.log("error");
      } else {
        res.render("register", {
          alert: true,
          alertTitle: "Registro",
          alertMessage: "El usuario ha sido registrado correctamente",
          alertIcon: "success",
          showConfirmButton: false,
          timer: 1500,
          ruta: "login"
        });
      }
    }
  );
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
