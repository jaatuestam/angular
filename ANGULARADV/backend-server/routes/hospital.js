var express = require('express');

var middlewareAutenticacion = require('../middlewares/autenticacion');

var app = express();

var Hospital = require('../models/hospital');

//========================================
//obtener todos los hospitales
//========================================
app.get('/', (req, res) => {
  Hospital.find({}).exec(
    (err, hospitales) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          mensaje: 'Error al consultar hospitales',
          errores: err
        });
      }

      res.status(200).json({
        ok: true,
        hospitales: hospitales
      });

    });
});

//========================================
//actualizar un nuevo hospital
//========================================
app.put('/:id', middlewareAutenticacion.verificaToken, (req, res) => {
  var body = req.body;
  var id = req.params.id;

  Hospital.findById(id, (err, hospital) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: 'Error al buscar hospital',
        errores: err
      });
    }

    if (!hospital) {
      return res.status(400).json({
        ok: false,
        mensaje: `El hospital con el id ${id} no existe`,
        errores: {
          message: 'No existe un hospital con ese ID'
        }
      });
    }

    hospital.nombre = body.nombre;
    hospital.usuario = req.usuario.id;

    hospital.save((err, hospitalGuardado) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          mensaje: 'error al actualizar hospital'
        });
      }

      res.status(200).json({
        ok: true,
        hospital: hospitalGuardado
      });

    });

  });
});


//========================================
//guardar un nuevo hospital
//========================================
app.post('/', middlewareAutenticacion.verificaToken, (req, res) => {
  var body = req.body;

  var hospital = new Hospital({
    nombre: body.nombre,
    usuario: req.usuario.id
  });

  hospital.save((err, hospitalGuardado) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        mensaje: 'error al crear hospital',
        errores: err
      });
    }

    res.status(201).json({
      ok: true,
      usuario: hospitalGuardado,
      usuariotoken: req.usuario
    });

  });
});


//========================================
//borrar un hospital
//========================================
app.delete('/:id', middlewareAutenticacion.verificaToken, (req, res) => {
  var id = req.params.id;

  Hospital.findByIdAndRemove(id, (err, hospitalBorrado) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: 'error al borrar Hospital',
        errores: err
      });
    }

    if (!hospitalBorrado) {
      return res.status(400).json({
        ok: false,
        mensaje: `No existe el hospital con el id ${id}`,
        errores: {
          mensaje: `No existe el hospital con el id`
        }
      });
    }

    res.status(200).json({
      ok: true,
      hospital: hospitalBorrado
    })
  });
});

module.exports = app;
