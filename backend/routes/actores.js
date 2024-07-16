const { Router } = require('express');
const router = Router();

var { getActores, getActorById, getActorByName, insertActor, deleteActor, updateActor} = require('../controllers/actores');

router.get('/actores', getActores);
router.get('/actores/:id', getActorById);
router.get('/actores/nombre/:nombre', getActorByName);
router.post('/actores', insertActor);
router.delete('/actores/:id', deleteActor);
router.put('/actores/:id', updateActor);

module.exports = router;