var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var middlewareAutenticacion = require('../middlewares/autenticacion')

var app = express();

var Usuario = require('../models/usuario');


//========================================
//obtener todos los usuarios
//========================================
app.get('/', (req, res, next) => {

  var desde = req.query.desde || 0;
  desde = Number(desde);

  Usuario.find({}, 'nombre email img role')
    .skip(desde)
    .limit(5)
    .exec(
    (err, usuarios) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          mensaje: 'Error al obtener usuarios',
          errores: err
        });
      }

      Usuario.count({}, (err, total) =>{

        if(err){
          return res.status(500).json({
            ok:false,
            mensaje: 'error al contar los usuarios',
            errores : err
          });
        }

        res.status(200).json({
          ok: true,
          usuarios: usuarios,
          total : total
        })
      });


    });
});

//========================================
//actualizar un nuevo usuario
//========================================
app.put('/:id',middlewareAutenticacion.verificaToken,(req,res) =>{

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
app.post('/',middlewareAutenticacion.verificaToken,(req,res) =>{
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
      usuario: usuarioGuardado,
      usuariotoken : req.usuario
    });
  })
});

//========================================
//borrar un usuario por el id
//========================================
app.delete('/:usuario_borrar',middlewareAutenticacion.verificaToken,(req,res)=>{
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
