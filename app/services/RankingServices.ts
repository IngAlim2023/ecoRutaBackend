import Ranking from '#models/ranking'
import { DataRanking } from '../interfaces/ranking.js'

export default class RankingServices {
  async create(data: DataRanking) {
    return await Ranking.create(data)
  }
  async read() {
    return await Ranking.query().select('usuario_id').sum('puntos as puntos').groupBy('usuario_id').preload('usuario').orderBy('puntos', 'desc')
  }
}
