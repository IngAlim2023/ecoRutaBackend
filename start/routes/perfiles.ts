import PerfilesController from "../../app/controller/PerfilesController.js";
import router from "@adonisjs/core/services/router";

const perfil = new PerfilesController();

router.post('/perfil', perfil.createPerfil);
router.get('/perfil/nick/:nick', perfil.validaNickname);
router.post('/perfil/:id', perfil.actualizarUltimaVez);
router.get('/perfil/:id', perfil.readPerfil);

