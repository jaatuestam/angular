var express = require('express');

var middlewareAutenticacion = require('../middlewares/autenticacion');

var app = express();

var Medico = require('../models/medico');

//========================================
//obtener todos los medicos
//========================================
app.get('/', (req,res) =>{

  var desde = req.query.desde || 0;
  desde = Number(desde);

  Medico.find({})
    .populate('usuario', 'nombre email')
    .populate('hospital')
    .skip(desde)
    .limit(5)
    .exec(
    (err,medicos) => {
        if(err){
          return res.status(500).json({
            ok:false,
            mensaje:'Error al consultar medicos',
            errores : err
          });
        }

        Medico.count({},(err, total) =>{

          if(err){
            return res.status(500).json({
              ok:false,
              mensaje: 'error al contar los medicos',
              errores : err
            });
          }

          res.status(200).json({
            ok:true,
            medicos : medicos,
            total : total
          });
        });

    });
});

//========================================
//actualizar un medico
//========================================
app.put('/:id', middlewareAutenticacion.verificaToken ,(req, res) =>{
  var body = req.body;
  var id = req.params.id;

  Medico.findById(id,(err,medico) =>{
    if(err){
      return res.status(500).json({
        ok:false,
        mensaje: 'Error al buscar medico',
        errores : err
      });
    }

    if(!medico){
      return res.status(400).json({
        ok:false,
        mensaje : `El medico con el id ${id} no existe`,
        errores : {message : 'El medico no existe con ese id'}
      });
    }

    medico.nombre = body.nombre;
    medico.usuario = req.usuario;
    medico.hospital = body.hospital;

    medico.save((err, medicoGuardado) => {
      if(err){
        return res.status(500).json({
          ok:false,
          mensaje:'Error al actualizar medico',
          errores : err
        });
      }

      res.status(200).json({
        ok:true,
        medico : medicoGuardado
      });
    });
  });
});

//========================================
//guardar un nuevo hospital
//========================================
app.post('/', middlewareAutenticacion.verificaToken, (req, res) =>{
  var body = req.body;

  var medico = new Medico({
    nombre : body.nombre,
    img: body.img,
    hospital : body.hospital,
    usuario:req.usuario
  });

  medico.save((err,medicoGuardado) =>{
    if(err){
      return res.status(400).json({
        ok:false,
        mensaje : 'Error al crear medico',
        errores : err
      });
    }

    res.status(201).json({
      ok:true,
      medico:medicoGuardado
    });
  });
});

//========================================
//borrar un medico
//========================================
app.delete('/:id', middlewareAutenticacion.verificaToken, (req,res) =>{
  var id = req.params.id;

  Medico.findByIdAndRemove(id,(err, medicoBorrado) =>{
    if(err){
      return res.status(500).json({
        ok:false,
        mensaje:'Error al borrar medico',
        errores: err
      });
    }

    if(!medicoBorrado){
      return res.status(400).json({
        ok:false,
        mensaje : `El medico con el id ${id} no existe`,
        errores : {message: 'El medico con ese id no existe'}
      })
    }

    res.status(200).json({
      ok:true,
      medico:medicoBorrado
    })
  });
});


module.exports = app;
