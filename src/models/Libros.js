const mongoose = require('mongoose');
const { Schema } = mongoose;

const libroSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required:true
  },
  editorial: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  genero:{
      type: String,
      required: true
  },
  pais:{
      type: String,
      required: true
  },
  Npaginas:{
      type: String,
      required: true
  },
  fecha: {
    type: Date,
    default: Date.now
<<<<<<< HEAD
  },
  imagen: {
    type: String,
    required: true
=======
>>>>>>> 080bd823e852b45e762ddb179a3745f1e12e4a7b
  }
 

  }
);

module.exports = mongoose.model('libros', libroSchema);