var express = require('express');

var app = express();

var Hospital = require('../models/hospital');
var Medico = require('../models/medico');
var Usuario = require('../models/usuario');

app.get ('/todo/:busqueda',(req,res,next) => {

  var busqueda = req.params.busqueda;

  var regex = new RegExp(busqueda, 'i');

  Promise.all([buscarHospitales(busqueda,regex),
              buscarMedicos(busqueda, regex),
              buscarUsuarios(busqueda, regex)
            ]).then(respuesta =>{
              res.status(200).json({
                ok:true,
                hospitales:respuesta[0],
                medicos:respuesta[1],
                usuarios:respuesta[2]
              });
            });
});


function buscarHospitales(busqueda, regex){

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

function buscarMedicos(busqueda, regex){

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

function buscarUsuarios(busqueda, regex){

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
