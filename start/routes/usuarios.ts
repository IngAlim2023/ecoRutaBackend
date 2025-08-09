import UsuariosController from "../../app/controller/UsuariosController.js";
import router from "@adonisjs/core/services/router";

const usuario = new UsuariosController();

router.post('/usuario', usuario.createUsuario);