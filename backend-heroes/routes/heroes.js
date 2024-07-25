const { Router } = require('express');
const router = Router();

var { getActores, getActorById, getActorByName, insertActor, deleteActor, updateActor} = require('../controllers/actores');

router.get('/heroes', getActores);
router.get('/heroes/:id', getActorById);
router.get('/heroes/nombre/:nombre', getActorByName);
router.post('/heroes', insertActor);
router.delete('/heroes/:id', deleteActor);
router.put('/heroes/:id', updateActor);

module.exports = router;