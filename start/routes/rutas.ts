import RutasController from '../../app/controller/RutasController.js'
import router from '@adonisjs/core/services/router'

const rutas = new RutasController()

router.post('/rutas', rutas.createRoute)
router.get('/rutas', rutas.readAllRoutes)
router.get('/rutas/:id', rutas.readRouteById)
router.put('/rutas/:id', rutas.updateRoute)
router.delete('/rutas/:id', rutas.deleteRoute)
