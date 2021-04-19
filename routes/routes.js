
const { Router } = require('express');
const router = Router();
const {checkLogin,checkAdmin} = require('../js/middlewares/middles');
const { User} = require('../data/db');
const flash = require('connect-flash');

router
  .get('/dos', checkLogin, async (req, res) => { res.render('dos.ejs'); })
  .get('/index', checkLogin, async (req, res) => { res.render('index.ejs'); })
  .get('/login',checkLogin,async(req,res)=>{res.render('login.ejs');})
  .get('/logout', async (req, res) => { req.session.user = null; res.redirect('/login'); })
  .get('/admin',[checkLogin,checkAdmin],async(req,res)=>{res.render('admin.ejs');});

module.exports = router;