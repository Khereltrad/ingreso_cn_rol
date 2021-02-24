
const { Router } = require('express');
const { Keeper } = require('../db');
const router = Router();

// Middleware: Verifica si el usuario está logueado.
function checkLogin(req, res, next) {

   if (req.session.user == null) {
     console.log('error de logeo');
     return res.redirect('/login');
   } else {
     res.locals.user = req.session.user;
     console.log('usuario logeado');
   };
   next();
}

function checkAdmin(req,res,next){
  
  if (req.session.user.rol == "USUARIO") {
    console.log('Usuario no Autorizado');
    return res.redirect('/logout');
  } else {
    res.locals.user = req.session.user;
    console.log('Administrador logeado');
  };
  next();
}

router
  .get('/dos', checkLogin, async (req, res) => { res.render('dos.ejs'); })
  .get('/', checkLogin, async (req, res) => { res.render('index.ejs'); })
  .get('/login',checkLogin,async(req,res)=>{res.render('login.ejs');})
  .get('/admin',[checkLogin,checkAdmin],async(req,res)=>{res.render('admin.ejs');});

// router.post('/', checkLogin, async (req, res) => {
//   try {
//     // acá coloco lo que intento hacer
//     await Keeper.create(req.body);

//   } catch (err) {
//     // acá coloco lo que haré si ocurre algún error
//     req.flash('errors', err.errors[key].message);
//   }
//   res.redirect('/');
// });


module.exports = router;