import LogrosController from "../../app/controller/LogrosController.js";
import router from "@adonisjs/core/services/router";

const logros = new LogrosController();

router.post('/logros', logros.createLogro);
router.get('/logros', logros.readLogros);
router.get('/logros/:id', logros.readLogroById);
router.put('/logros/:id', logros.updateLogro);
router.delete('/logros/:id', logros.deleteLogroById);