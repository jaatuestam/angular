var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var SEED = require('../config/config').SEED;

var app = express();
var Usuario = require('../models/usuario');

//google
var CLIENT_ID = require('../config/config').CLIENT_ID;
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);


//========================================
//login de google
//========================================
async function verify(token) {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();

  return {
    nombre:payload.name,
    email: payload.email,
    img: payload.picture,
    google:true
  }
  // const userid = payload['sub'];
  // If request specified a G Suite domain:
  //const domain = payload['hd'];
}


app.post('/google',async (req,res) =>{

  var token = req.body.token;

  var googleUser = await verify(token).catch(err =>{
    return res.status(403).json({
      ok: false,
      mensaje: 'token no valido'
    });
  });

  return res.status(200).json({
    ok: true,
    mensaje: 'ok'
    googleUser : googleUser
  });
});



//========================================
//login de usuario
//========================================
app.post('/',(req,res) =>{
  var body = req.body;

  Usuario.findOne({email:body.email}, (err, usuarioBD) =>{
    if(err){
      return res.status(500).json({
        ok: false,
        mensaje: 'Error al buscar usuarios',
        errores: err
      });
    }

    if(!usuarioBD){
      return res.status(400).json({
        ok: false,
        mensaje: 'credenciales incorrectas - email',
        errores: err
      });
    }

    if(!bcrypt.compareSync(body.password,usuarioBD.password)){
      return res.status(400).json({
        ok: false,
        mensaje: 'credenciales incorrectas - password',
        errores: err
      });
    }

    usuarioBD.password = ':S';
    //crear un token
    var token = jwt.sign({usuario:usuarioBD},SEED,{expiresIn:14400})//4 horas

    res.status(200).json({
      ok: true,
      usuario: usuarioBD,
      token : token,
      id: usuarioBD._id
    });

  });
});




module.exports = app;
