import RecorridosServices from '#services/RecorridosServices'
import { HttpContext } from '@adonisjs/core/http'

const recorrido = new RecorridosServices()

export default class Recorridoscontroller {
  async createRecorrido({ request, response }: HttpContext) {
    try {
      const { fecha, distancia, tiempo_minutos, co2, ruta_id, usuario_id } = request.body()

      const newRecorrido = await recorrido.create({
        fecha,
        distancia,
        tiempo_minutos,
        co2,
        ruta_id,
        usuario_id,
      })

      const puntaje = parseInt((distancia/100).toFixed(0))

      await recorrido.createPuntaje(puntaje, usuario_id)

      return response.status(201).json({ msg: 'Creado', data: newRecorrido })
    } catch (e) {
      return response.status(500).json({
        msg: 'Error interno.',
        error: {
          message: e.message,
          stack: e.stack,
          name: e.name,
          ...(e?.code && { code: e.code }), // si existe un código (por ejemplo en errores de PG)
          ...(e?.detail && { detail: e.detail }), // detalle de PG
          ...(e?.hint && { hint: e.hint }), // hint de PG
        },
      })
    }
  }
  async readRecorridoUsuario({ params, response }: HttpContext) {
    try {
      const { id } = params
      const recorr = await recorrido.getByUsuario(id)
      return response.status(200).json({ msg: 'Informacion obtenida', data: recorr })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
  async readStatsUsuario({ params, response }: HttpContext) {
    try {
      const { id } = params
      const recorr = await recorrido.getStatsByUsuario(id)
      return response.status(200).json({ msg: 'Informacion obtenida', data: recorr })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
}
