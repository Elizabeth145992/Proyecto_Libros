// Aqui el usuario podra ingresar a las url para registrarse o autenticarse
const express=require('express'); 
const router= express.Router();

// <----------------- RUTA PARA EL REGISTRO DE USUARIOS ------------------>
router.get('/users/singin',(req,res)=>{
    res.render('users/singin.hbs');
});

// <----------------- RUTA PARA EL ACCESO DE USUARIOS   ------------------>
router.get('/users/login',(req,res)=>{
    res.render('users/login.hbs');
});

// <----------------- AQUI SE REQUIERE EL MODELO DE User.js DE LA CARPETA MODELS --------------->
const SchemaLibro=require('../models/Libros.js');

router.post('/books/new-book',async(req,res)=>{
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
        errors.push({text:"Favor de llenar el campo Genero"})
    }
    if(!pais){
        errors.push({text:"Favor de llenar el campo Pais"})
    }
    if(!Npaginas){
        errors.push({text:"Favor de llenar el campo Numero de Paginas"})
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
            fecha
        });
    }
    else{
        const NuevoLibro = new SchemaLibro({id,titulo,autor,editorial,genero,pais,Npaginas,fecha}); // 
        await NuevoLibro.save();
        //console.log(NuevoLibro);
        res.redirect('/books');
    }
    
});


module.exports=router;