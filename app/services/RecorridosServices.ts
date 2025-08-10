import Recorrido from '#models/recorrido'
import { DataRecorrido } from '../interfaces/recorridos.js'

export default class RecorridosServices {
  async create(data: DataRecorrido) {
    return await Recorrido.create(data)
  }
  async getByUsuario(usuarioId: number) {
    return await Recorrido.query().where('usuario_id', usuarioId)
  }
  async getStatsByUsuario(usuarioId: number) {
    const result = await Recorrido.query()
      .where('usuario_id', usuarioId)
      .sum('distancia as distancia_total')
      .sum('co2 as co2_total')
    return result[0]
  }
}
