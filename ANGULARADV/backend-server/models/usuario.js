var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

//roles validos
var rolesValidos = {
  values : ['ADMIN_ROLE', 'USER_ROLE'],
  message : '{VALUE} no es un rol permitido'
}

var Schema = mongoose.Schema;

var usuarioSchema = new Schema({

    nombre: {type:String,required : [true,'El nombre es obligatorio']},
    email: {type:String,unique:true,required : [true,'El correo es obligatorio']},
    password: {type:String,required : [true,'La contraseña es obligatorio']},
    img: {type:String,required : false},
    role: {type:String,required : true, default:'USER_ROLE', enum:rolesValidos}
});

usuarioSchema.plugin(uniqueValidator,{message : '{PATH} debe ser único'})

module.exports = mongoose.model('Usuario', usuarioSchema);
