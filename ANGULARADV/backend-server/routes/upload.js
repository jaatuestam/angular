var express = require('express');
var fileUpload = require('express-fileupload');
var fs = require('fs');

var app = express();

var Usuario = require('../models/usuario');
var Medico = require('../models/medico');
var Hospital = require('../models/hospital');

// default options
app.use(fileUpload());

app.put ('/:tipo/:id',(req,res,next) => {

  var tipo = req.params.tipo;
  var  id = req.params.id;
  var tiposColeccion = ['hospitales', 'medicos', 'usuarios'];

  if(tiposColeccion.indexOf(tipo) <0){
    return res.status(400).json({
      ok:false,
      mensaje:'Tipo de coleccion no valido',
      errores : {mensaje : 'Tipo de coleccion no valido  ' + tiposColeccion.join(', ')}
    });
  }

  if (!req.files){
    return res.status(400).json({
      ok:false,
      mensaje:'Archivo vacio',
      errores : {mensaje : 'No se subio un archivo'}
    });
  }

  var archivo = req.files.imagen;
  var nombreArchivo = archivo.name.split('.');
  var extension = nombreArchivo[nombreArchivo.length -1];

  var extensionesValidas =  ['jpg', 'png','gif','jpeg'];

  if(extensionesValidas.indexOf(extension) < 0){
    return res.status(400).json({
      ok:false,
      mensaje:'Archivo no valido',
      errores : {mensaje : 'La extension del archivo no es valida son validas  ' + extensionesValidas.join(', ')}
    });
  }

  //nombre de archivo
  var nuevoArchivo = `${id}-${new Date().getMilliseconds()}.${extension}`;
  var path = `./uploads/${tipo}/${nuevoArchivo}`;

  archivo.mv(path, err =>{
    if(err){
      return res.status(500).json({
        ok:false,
        mensaje:'Error al mover archivo',
        errores : err
      });
    }

    subirPorTipo(tipo,id,nuevoArchivo,res);



  });


});

function subirPorTipo(tipo,id,nombreArchivo,res){

  if(tipo === 'usuarios'){
    Usuario.findById(id,(err,usuarioBD) =>{
      if(err){
        return res.status(500).json({
          ok:false,
          mensaje: 'Error al cargar usuario',
          errores :{mensaje : 'Error consultando un usuario ' + err}
        });
      }

      if(!usuarioBD){
        return res.status(400).json({
          ok:false,
          mensaje: 'Usuario no existe',
          errores :{mensaje : 'usuario no existe'}
        });
      }

      var pathViejo = `./uploads/usuarios/${usuarioBD.img}`;

      //Si existe elimina la imagen anterior
      if(fs.existsSync(pathViejo)){
        fs.unlink(pathViejo);
      }

      usuarioBD.img = nombreArchivo;

      usuarioBD.save((err, usuarioActualizado) =>{
        if(err){
          return res.status(500).json({
            ok:false,
            mensaje : 'Error actualizando usuario',
            errores : {mensaje : 'Error al actualizar la imagen del usuario '+ err}
          });
        }

        usuarioActualizado.password = ':S';

        return res.status(200).json({
          ok:true,
          mensaje:'imagen de usuario actualizada',
          usuario : usuarioActualizado
        })
      });

    });

  }
  if(tipo === 'medicos'){
    Medico.findById(id,(err,medicoBD) =>{
      if(err){
        return res.status(500).json({
          ok:false,
          mensaje: 'Error al cargar medico',
          errores :{mensaje : 'Error consultando un medico ' + err}
        });
      }

      if(!medicoBD){
        return res.status(400).json({
          ok:false,
          mensaje: 'medico no existe',
          errores :{mensaje : 'medico no existe'}
        });
      }

      var pathViejo = `./uploads/medicos/${medicoBD.img}`;

      //Si existe elimina la imagen anterior
      if(fs.existsSync(pathViejo)){
        fs.unlink(pathViejo);
      }

      medicoBD.img = nombreArchivo;

      medicoBD.save((err, medicoActualizado) =>{
        if(err){
          return res.status(500).json({
            ok:false,
            mensaje : 'Error actualizando medico',
            errores : {mensaje : 'Error al actualizar la imagen del medico '+ err}
          });
        }

        return res.status(200).json({
          ok:true,
          mensaje:'imagen de medico actualizada',
          medico : medicoActualizado
        })
      });

    });

  }
  if(tipo === 'hospitales'){
    Hospital.findById(id,(err,hospitalBD) =>{
      if(err){
        return res.status(500).json({
          ok:false,
          mensaje: 'Error al cargar hospitales',
          errores :{mensaje : 'Error consultando un hospital ' + err}
        });
      }

      if(!hospitalBD){
        return res.status(400).json({
          ok:false,
          mensaje: 'hospital no existe',
          errores :{mensaje : 'hospital no existe'}
        });
      }

      var pathViejo = `./uploads/hospitales/${hospitalBD.img}`;

      //Si existe elimina la imagen anterior
      if(fs.existsSync(pathViejo)){
        fs.unlink(pathViejo);
      }

      hospitalBD.img = nombreArchivo;

      hospitalBD.save((err, hospitalActualizado) =>{
        if(err){
          return res.status(500).json({
            ok:false,
            mensaje : 'Error actualizando hospital',
            errores : {mensaje : 'Error al actualizar la imagen del hospital '+ err}
          });
        }

        return res.status(200).json({
          ok:true,
          mensaje:'imagen de hospital actualizada',
          hospital : hospitalActualizado
        })
      });

    });

  }

}


module.exports = app;
