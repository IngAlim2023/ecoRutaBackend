import RolesController from '../../app/controller/RolesController.js'
import router from '@adonisjs/core/services/router'

router.post('/roles', (ctx) => new RolesController().createRol(ctx))
router.get('/roles', (ctx) => new RolesController().readRoles(ctx))
router.put('/roles/:id', (ctx) => new RolesController().updateRol(ctx))
router.delete('/roles/:id', (ctx) => new RolesController().deleteRol(ctx))
