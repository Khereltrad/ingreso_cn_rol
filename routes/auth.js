
const { Router } = require('express');
const { User } = require('../data/db');
const bcrypt = require('bcrypt');
const router = Router();

// 1. Cargar los formularios para login y register
router
.get('/register', async (req, res) => { const errors = req.flash('errors'); res.render('register.ejs', {errors: errors});})
.get('/login', async (req, res) => {const errors = req.flash('errors'); res.render('login.ejs', {errors: errors});})

// 2. Ruta para registrar nuevos usuarios (formulario de registro)
.post('/registernow', async (req, res) => {
  const password_encrypted = await bcrypt.hash(req.body.password, 10);
  try {
            const usuario = await User.findAndCountAll();
            let rol_usuario = "USUARIO";
             if(usuario.count==0){ rol_usuario = "ADMIN" };
            // creacion de usuario
            const user = await User.create({ name: req.body.name,  lastname: req.body.lastname, rol: rol_usuario, email: req.body.email, password: password_encrypted });
            req.session.user = user;

  } catch(err) { for (var key in err.errors) { req.flash('errors', err.errors[key].message);} return res.redirect('/login'); };
    res.redirect('/index');   // si la validación es correcta, redirigimos al usuario al HOME
});

router.post('/login', async (req, res) => {
  const user = await User.findOne({where: {email: req.body.email}});
  if (user == null) { req.flash('errors', 'Usuario inexistente o contraseña incorrecta'); return res.redirect('/login');}
  var isCorrect = await bcrypt.compare(req.body.password, user.password);
  if (isCorrect == false) { req.flash('errors', 'Usuario inexistente o contraseña incorrecta'); return res.redirect('/login');}
  req.session.user = user;
  res.redirect('/index')
});

module.exports = router;
