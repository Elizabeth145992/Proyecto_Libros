// Aqui van las rutas para el crud de los libros
const express=require('express'); 
const router= express.Router();

// <----------------- AQUI SE REQUIERE EL MODELO DE Libros.js DE LA CARPETA MODELS --------------->
const SchemaLibro=require('../models/Libros.js');

const {isAuthenticated }=require('../helpers/auth');

// <----------------- RUTA PARA DE PRUEBAS ------------------>



router.get('/books/catalogo',isAuthenticated, (req,res)=>{

    res.render('books/catalogo');
});


// <----------------- RUTA PARA AGREGAR LIBROS ------------------>
router.get('/books/new-book',isAuthenticated,(req,res)=>{
    res.render('books/new-book');
});

// <----------------- RUTA PARA AGREGAR RECIBIR DATOS DE LIBROS ------------------>
router.post('/books/new-book', isAuthenticated, async(req,res)=>{
    const {id, titulo, descripcion, editorial, autor, genero, pais, Npaginas, fecha, imagen}=req.body; // Campos enviados desde el formulario de new-book
    const errors=[];
    if(!id){
        errors.push({text:"Favor de llenar el campo ID"});
    }
    if(!titulo){
        errors.push({text:"Favor de llenar el campo Titulo"});
    }
    if(!descripcion){
        errors.push({text:"Favor de llenar el campo descripción"});
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
    if(!imagen){
        errors.push({text:"Favor de llenar el campo imagen"});
    }
    
    if(errors.length > 0){
        res.render("books/new-book",{
            errors,
            id,
            titulo,
            descripcion,
            autor,
            editorial,
            genero,
            pais,
            Npaginas,
            fecha, 
            imagen
        });
    }
    else{
        const NuevoLibro = new SchemaLibro({id,titulo, descripcion, autor,editorial,genero,pais,Npaginas,fecha, imagen}); // 
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

  router.get('/books/edit/:id',async(req, res)=>{
      const libro = await SchemaLibro.findById(req.params.id);
      res.render('books/edit', {libro});
  });

  router.put('/books/edit/:id' ,async (req, res)=>{
    const {titulo, editorial}=req.body;
   await SchemaLibro.findByIdAndUpdate(req.params.id, {titulo, editorial});
   res.redirect('/books');
  });

  router.delete('/books/delete/:id',async (req, res)=>{
      await SchemaLibro.findByIdAndDelete(req.params.id);
      res.redirect('/books');
  });
module.exports = router;