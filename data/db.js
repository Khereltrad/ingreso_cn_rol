const Sequelize = require('sequelize');
const { hasMany,belongsTo } = require('sequelize');
const sql = new Sequelize('testing','root','pw', { host: 'localhost', dialect: 'mysql'});

const User = sql.define('User', {
  id        : { type: Sequelize.INTEGER,  primaryKey: true, autoIncrement: true },
  name      : { type: Sequelize.STRING,   allowNull: false, validate: { notNull: { msg: 'Debe indicar un nombre'}, len: { args: [2], msg: 'El nombre debe ser de largo al menos 2'}} },
  lastname  : { type: Sequelize.STRING,   allowNull: false, validate: { notNull: { msg: 'Debe indicar un apellido'}, len: { args: [2], msg: 'El nombre debe ser de largo al menos 2'}}},
  rol       : { type: Sequelize.STRING,   allowNull: false, defaultValue:"USUARIO"},
  email     : {type: Sequelize.STRING,    allowNull:false,unique:true,validate:{notNull:{msg:'Debe ingresar un Email'},len:{args:[6],msg:'El largo del correo debe ser de al menos 6 digitos'},isEmail:{msg:'Favor revise si el correo este bien escrito'}}},
  password  : {type: Sequelize.STRING,    allowNull:false,validate:{notNull:{msg:'Debe ingresar una Contraseña'},len:{args:[6],msg:'El largo de la contraseña  debe ser de al menos 6 digitos'}}}
},{ timestramps: true });

sql.sync() .then(() => { console.log('* ***** Base de datos y tablas creadas');}); 

module.exports = { User};