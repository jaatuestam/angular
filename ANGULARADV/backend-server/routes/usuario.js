var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var SEED = require('../config/config').SEED;

var app = express();
var Usuario = require('../models/usuario');


//========================================
//obtener todos los usuarios
//========================================
app.get('/', (req, res, next) => {

  Usuario.find({}, 'nombre email img role').exec(
    (err, usuarios) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          mensaje: 'Error al obtener usuarios',
          errores: err
        });
      }

      res.status(200).json({
        ok: true,
        usuarios: usuarios
      })

    });
});

//========================================
//verificar token
//========================================
app.use('/', (req,res,next) =>{
  var token = req.query.token;

  jwt.verify(token,SEED,(err,decoded) =>{
    if (err) {
      return res.status(401).json({
        ok: false,
        mensaje: 'token no valido',
        errores: err
      });
    }
    next();
  });
});

//========================================
//actualizar un nuevo usuario
//========================================
app.put('/:id',(req,res) =>{

  var id = req.params.id;
  var body = req.body;

  Usuario.findById(id, (err, usuario) =>{
    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: 'Error al consultar usuario',
        errores: err
      });
    }

    if(!usuario){
      return res.status(400).json({
        ok: false,
        mensaje: `El usuario con el id ${id} no existe`,
        errores: {message : 'No existe un usuario con ese ID'}
      });
    }

    usuario.nombre = body.nombre;
    usuario.email = body.email;
    usuario.role = body.role;

    usuario.save ( (err,usuarioGuardado) =>{
      if (err) {
        return res.status(400).json({
          ok: false,
          mensaje: 'Error al actualizar usuario',
          errores: err
        });
      }

      usuarioGuardado.password = ':S'

      res.status(200).json({
        ok:true,
        usuario: usuarioGuardado
      });
    });

  });
});


//========================================
//crear un nuevo usuario
//========================================
app.post('/',(req,res) =>{
  var body = req.body;

  var usuario = new Usuario({
    nombre : body.nombre,
    email :body.email,
    password: bcrypt.hashSync(body.password,10),
    img:body.img,
    role:body.role
  });

  usuario.save((err,usuarioGuardado)=>{
    if(err){
      return res.status(400).json({
        ok: false,
        mensaje: 'Error al crear usuario',
        errores: err
      });
    }

    res.status(201).json({
      ok: true,
      usuario: usuarioGuardado
    });
  })
});

//========================================
//borrar un usuario por el id
//========================================
app.delete('/:usuario_borrar',(req,res)=>{
  var id = req.params.usuario_borrar;

  Usuario.findByIdAndRemove(id, (err, usuarioBorrado)=>{
    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: 'Error al borrar usuario',
        errores: err
      });
    }

    if (!usuarioBorrado) {
      return res.status(400).json({
        ok: false,
        mensaje: 'No existe un usuario con ese id',
        errores: {message:'No existe un usuario con ese id'}
      });
    }

    res.status(200).json({
      ok: true,
      usuario: usuarioBorrado
    });

  });
});


module.exports = app;
