import Recorridoscontroller from "../../app/controller/RecorridosController.js";
import router from "@adonisjs/core/services/router";

const recorrido = new Recorridoscontroller();

router.post('/recorrido', recorrido.createRecorrido);
router.get('/recorridos/:id', recorrido.readRecorridoUsuario);
router.get('/recorrido/stats/:id', recorrido.readStatsUsuario);