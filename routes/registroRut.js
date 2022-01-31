const { Router } = require('express');
const router = Router();
const { 
    inicio,
    all,
    search,
    createRegistro,
    updateRegistro,
    deleteRegistro
} = require('../controllers/RegistroControllers');



router.get('/', inicio);
router.get('/todos', all);
router.get('/todos/:id', search);
router.post('/ingresar', createRegistro);
router.put('/actualizar/:id', updateRegistro);
router.delete('/eliminar/:id', deleteRegistro);


module.exports = router;
