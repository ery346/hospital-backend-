/*
        Ruta: /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth')
const { validarCampos } =require('../middlewares/validar-campos');

const router = Router();

router.post('/', 
        [
                check('email', 'El correo es obligatorio').isEmail(),
                check('pass', 'El password es obligatorio').not().isEmail(),
                validarCampos
        ],
        login
);


module.exports = router;