// <-------------- CONEXION A LA BASE DE DATOS ------------>
const mongoose= require('mongoose'); // COnstante para requerir mongoose
const _local= 'mongodb://localhost/DBLibros';
<<<<<<< HEAD
const _remoto= 'mongodb://CAA:1234@3.83.216.12/DBLibros?authSource=admin';
=======
const _remoto= 'mongodb://NCN:1234@3.83.216.12/DBLibros?authSource=admin';
>>>>>>> develope

// <---- Conexion y configuracion basica de moongoose ----->S
mongoose.connect('mongodb://localhost/DBLibros',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
})
.then(db=> console.log('Conectado a la DB! ')) // Si la conexion es exitosa, muestra el siguiente mensaje.
.catch(err=>console.error(err));               // Si la conexion falla, muestra el error.