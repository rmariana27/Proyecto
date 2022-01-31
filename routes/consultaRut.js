const { Router } = require('express');
const router = Router();
const { 
    inicio,
    mostrarConsulta,
    search,
    createConsulta,
    updateConsulta,
    deleteConsulta
} = require('../controllers/consultaControllers');



router.get('/', inicio);
router.get('/formularioEnviado', mostrarConsulta);
router.get('/todos/:id', search);
router.post('/', createConsulta);
router.put('/actualizar/:id', updateConsulta);
router.delete('/eliminar/:id', deleteConsulta);


module.exports = router;
