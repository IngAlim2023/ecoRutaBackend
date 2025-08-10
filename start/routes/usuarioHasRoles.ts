import UsuarioHasRolesController from "../../app/controller/UsuarioHasRolesController.js";
import router from "@adonisjs/core/services/router";

const rol = new UsuarioHasRolesController();

router.post('/permisos', rol.createRole);
router.get('/permisos/:id', rol.readPermisos);
router.delete('/permisos/:id', rol.deletePermiso);