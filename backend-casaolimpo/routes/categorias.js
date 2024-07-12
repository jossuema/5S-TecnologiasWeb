const { Router } = require('express');
const router = Router();

var { getCategorias, getCategoriaById, insertCategoria, updateCategoria, deleteCategoria } = require('../controllers/categorias');

router.get('/categorias', getCategorias);
router.get('/categorias/:id', getCategoriaById);
router.post('/categorias', insertCategoria);
router.put('/categorias/:id', updateCategoria);
router.delete('/categorias/:id', deleteCategoria);
