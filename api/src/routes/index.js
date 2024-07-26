const {Router} = require('express')
const router = Router();
const userController = require('../controller/UsuariosController');
const InventarioController = require('../controller/InventarioController')

//RUTAS DE USUARIOS
router.get('/getUser', userController.getUser);
router.post('/SignUp', userController.SignUp);
router.post('/SignIn', userController.SignIn);

//RUTAS DE INVENTARIO
router.get('/getInv', InventarioController.getIn);
router.post('/postDev', InventarioController.AddDevice);
router.put('/putDev/:id', InventarioController.putDevice);
router.delete('/DeleteDev/:id', InventarioController.deleteDevice);


module.exports = router;