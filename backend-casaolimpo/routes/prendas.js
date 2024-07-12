const { Router } = require('express');
const router = Router();

const { getPrendas, getPrendaById, updatePrenda, insertPrenda, deletePrenda } = require('../controllers/prenda');

router.get('/prendas', getPrendas);
router.get('/prendas/:id', getPrendaById);
router.post('/prendas', insertPrenda);
router.put('/prendas/:id', updatePrenda);
router.delete('/prendas/:id', deletePrenda);