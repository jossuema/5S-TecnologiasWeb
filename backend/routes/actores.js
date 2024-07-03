const { Router } = require('express');
const router = Router();

var { getActores, getActorById, getActorByName, insertActor, deleteActor} = require('../controllers/actores');

router.get('/actores', getActores);
router.get('/actores/:id', getActorById);
router.get('/actores/nombre/:nombre', getActorByName);
router.post('/actores', insertActor);
router.delete('/actores/:id', deleteActor);

module.exports = router;