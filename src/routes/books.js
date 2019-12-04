// Aqui van las rutas para el crud de los libros
const express=require('express'); 
const router= express.Router();

// <----------------- AQUI SE REQUIERE EL MODELO DE Libros.js DE LA CARPETA MODELS --------------->
const SchemaLibro=require('../models/Libros.js');

const {isconected}=require('../helpers/auth');

// <----------------- RUTA PARA DE PRUEBAS ------------------>

router.get('/books/catalogo',(req,res)=>{

router.get('/books',isconected, (req,res)=>{

    res.render('books/catalogo');
});

//<------------------ RUTA PARA CRUD----------------------------->
router.get('/books/crud',(req,res)=>{
    res.render('books/crud');
});
// <----------------- RUTA PARA AGREGAR LIBROS ------------------>
router.get('/books/new-book', isconected,(req,res)=>{
    res.render('books/new-book');
});

// <----------------- RUTA PARA AGREGAR RECIBIR DATOS DE LIBROS ------------------>
router.post('/books/new-book', isconected, async(req,res)=>{
    const {id, titulo, editorial, autor, genero, pais, Npaginas, fecha}=req.body; // Campos enviados desde el formulario de new-book
    const errors=[];
    if(!id){
        errors.push({text:"Favor de llenar el campo ID"});
    }
    if(!titulo){
        errors.push({text:"Favor de llenar el campo Titulo"});
    }
    if(!autor){
        errors.push({text:"Favor de llenar el campo Autor"});
    }
    if(!editorial){
        errors.push({text:"Favor de llenar el campo Editorial"});
    }
    if(!genero){
        errors.push({text:"Favor de llenar el campo Genero"});
    }
    if(!pais){
        errors.push({text:"Favor de llenar el campo Pais"});
    }
    if(!Npaginas){
        errors.push({text:"Favor de llenar el campo Numero de Paginas"});
    }
    
    if(errors.length > 0){
        res.render("books/new-book",{
            errors,
            id,
            titulo,
            autor,
            editorial,
            genero,
            pais,
            Npaginas,
            fecha, 
            imagen,
            descripcion
        });
    }
    else{
        const NuevoLibro = new SchemaLibro({id,titulo,autor,editorial,genero,pais,Npaginas,fecha, imagen, descripcion}); // 
        await NuevoLibro.save();
        //console.log(NuevoLibro);
        res.redirect('/books');
    }
    
});

//Todos los libros
router.get('/books', async (req, res) => {
    const libro = await SchemaLibro.find();
    res.render('books/catalogo', { libro });
  });

module.exports=router;