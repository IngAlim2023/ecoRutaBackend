import UsuariosController from '../../app/controller/UsuariosController.js'
import router from '@adonisjs/core/services/router'

const usuario = new UsuariosController()

router.post('/usuarios', usuario.createUsuario)
router.get('/usuarios', usuario.readUsuarios)
router.get('/usuarios/:id', usuario.readUsuario)
router.post('/login', usuario.login)
router.post('/verifyToken', usuario.verifyToken)
