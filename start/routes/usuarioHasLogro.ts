import UsuarioHasLogroController from "../../app/controller/UsuarioHasLogroController.js";
import router from "@adonisjs/core/services/router";

const logros = new UsuarioHasLogroController();

router.post('/usuariologro', logros.createLogro);
router.get('/usuariologro/:id', logros.readLogros);
router.delete('/usuariologro/:id', logros.deleteLogro);