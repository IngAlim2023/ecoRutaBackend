import RolesController from "../../app/controller/RolesController.js";
import router from "@adonisjs/core/services/router";

const rol = new RolesController();

router.post('/roles', rol.createRol);
router.get('/roles', rol.readRoles);
router.put('/roles/:id', rol.updateRol);
router.delete('/roles/:id', rol.deleteRol);