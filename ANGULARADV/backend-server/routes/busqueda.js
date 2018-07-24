var express = require('express');

var app = express();

var Hospital = require('../models/hospital');
var Medico = require('../models/medico');
var Usuario = require('../models/usuario');


//==============================================
// Busqueda general
//==============================================
app.get ('/todo/:busqueda',(req,res,next) => {

  var busqueda = req.params.busqueda;

  var regex = new RegExp(busqueda, 'i');

  Promise.all([buscarHospitales(regex),
              buscarMedicos(regex),
              buscarUsuarios(regex)
            ]).then(respuesta =>{
              res.status(200).json({
                ok:true,
                hospitales:respuesta[0],
                medicos:respuesta[1],
                usuarios:respuesta[2]
              });
            });
});

//==============================================
// Busqueda por coleccion
//==============================================
app.get('/coleccion/:tabla/:busqueda',(req,res) =>{
  var tabla = req.params.tabla;
  var busqueda = req.params.busqueda;

  var regex = new RegExp(busqueda, 'i');

  switch (tabla) {
    case 'usuario':
      buscarUsuarios(regex).then(usuarios =>{
        res.status(200).json({
          ok:true,
          [tabla]:usuarios
        });
      });
    break;
    case 'medico':
      buscarMedicos(regex).then(medicos =>{
        res.status(200).json({
          ok:true,
          [tabla]:medicos
        });
      });
    break;
    case 'hospital':
      buscarHospitales(regex).then(hospital =>{
        res.status(200).json({
          ok:true,
          [tabla]:hospital
        });
      });
    break;
    default:
    return res.status(400).json({
      ok:false,
      mensaje:'error en la tabla de busqueda',
      error: {mensaje : 'Tabla no definida, solo se permite medico, usuario y hospital'}
    });
  }
});



function buscarHospitales(regex){

    return new Promise((resolve, reject) =>{

      Hospital.find({nombre : regex})
                .populate('usuario','nombre email')
                .exec((err,hospitales) =>{
                  if(err){
                    reject('error al buscar hospitales' , err);
                  }else{
                    resolve(hospitales);
                  }
                });
    });
}

function buscarMedicos(regex){

    return new Promise((resolve, reject) =>{

      Medico.find({nombre : regex})
              .populate('usuario','nombre email')
              .exec((err,medicos) =>{
        if(err){
          reject('error al buscar medico' , err);
        }else{
          resolve(medicos);
        }
      });
    });
}

function buscarUsuarios(regex){

    return new Promise((resolve, reject) =>{

      Usuario.find({}, 'nombre email role')
              .or([{'nombre':regex}, {'email':regex}])
              .exec((err,usuarios) =>{
                      if(err){
                        reject('error al buscar usuarios' , err);
                      }else{
                        resolve(usuarios);
                      }
                    });
    });
}

module.exports = app;
