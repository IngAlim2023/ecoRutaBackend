import RankingServices from '#services/RankingServices'
import { HttpContext } from '@adonisjs/core/http'

const rank = new RankingServices()

export default class RankingController {
  async createRanking({ request, response }: HttpContext) {
    try {
      const { puntos, usuario_id } = request.body()
      const ranking = await rank.create({ puntos, usuario_id })
      return response.status(201).json({ msg: 'Creado', data: ranking })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
  async sumRanking({ response }: HttpContext) {
    try {
      const ranking = await rank.read()
      return response.status(201).json({ msg: 'Informacion obtenida', data: ranking })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
}
