var express = require('express');
const session = require('express-session');
var router = express.Router();
const credenciales = {email: 'admin@admin.com',password:'150697Abc'}


//login
router.post('/login', (req, res)=>{
     if(req.body.email == credenciales.email && req.body.password == credenciales.password){
        req.session.user=req.body.email;
         res.redirect('/route/bienvenida');
    }else{
         res.end("<script>alert('Email o passwd invalidos'); window.location.href = '/autenticacion'; </script>");
     }
 });

 router.get('/bienvenida', (req,res)=>{
    if(req.session.user){
        res.render('bienvenida', {user:req.session.user})
    }else
    res.send("<script>alert('Usuario no autorizado'); window.location.href = '/autenticacion'; </script>")
 });

 router.get('./logout', (req, res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send('Error')
        }else{
            res.render('/autenticacion', {title: 'AUTH', logout:'Cierre de sesion efectuado.'})
        }
    })
 });

 module.exports = router;