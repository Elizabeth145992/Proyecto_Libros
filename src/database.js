// <-------------- CONEXION A LA BASE DE DATOS ------------>
const mongoose= require('mongoose'); // COnstante para requerir mongoose
const _local= 'mongodb://localhost/DBLibros';

const _remoto= 'mongodb://ecr:1234@3.83.216.12:27017/DBLibros?authSource=admin';


// <---- Conexion y configuracion basica de moongoose ----->S
mongoose.connect(_remoto,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
})
.then(db=> console.log('Conectado a la DB! ')) // Si la conexion es exitosa, muestra el siguiente mensaje.
.catch(err=>console.error(err));               // Si la conexion falla, muestra el error.