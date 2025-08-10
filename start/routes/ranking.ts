import RankingController from "../../app/controller/RankingController.js";
import router from "@adonisjs/core/services/router";

const rank = new RankingController();

router.post('/ranking', rank.createRanking);
router.get('/ranking', rank.sumRanking);