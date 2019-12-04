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
  },
  imagen:{
    type: String,
    required:false
  },
  descripcion:{
    type:String,
    required: true
  }

  }
);

module.exports = mongoose.model('Libros', libroSchema);