const { Router } = require('express');
const router = Router();

var { getMarcas, getMarcasById, insertMarca, updateMarca, deleteMarca } = require('../controllers/marcas');

router.get('/marcas', getMarcas);
router.get('/marcas/:id', getMarcasById);
router.post('/marcas', insertMarca);
router.put('/marcas/:id', updateMarca);
router.delete('/marcas/:id', deleteMarca);