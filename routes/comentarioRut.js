'use strict';
const { Router } = require('express');
const express = require( 'express');
const router = express.Router();
const  { 
    inicio,
    listado,
    idComentario,
    formularioComentario,
    crearComentario,
    actualizarComentario,
    eliminarComentario
} = require('../controllers/ComentarioControllers');



router.get('/', inicio);
router.get('listaComentarios', listado);// select a comentarios
router.get('/comentarios', formularioComentario);
router.get('/:id', idComentario);
router.post('/', crearComentario); //insert a comentarios
router.put('/update', actualizarComentario); //update a comentarios
router.delete('/delete', eliminarComentario); //delete a comentarios

module.exports = router;
