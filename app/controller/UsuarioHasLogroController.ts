import UsuarioHasLogroServices from '#services/UsuarioHasLogrosServices'
import { HttpContext } from '@adonisjs/core/http'

const logros = new UsuarioHasLogroServices()

export default class UsuarioHasLogroController {
  async createLogro({ request, response }: HttpContext) {
    try {
      const { logro_id, usuario_id } = request.body()

      const logro = await logros.create({ logro_id, usuario_id })

      return response.status(201).json({ msg: 'Creado', data: logro })
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
  async readLogros({ params, response }: HttpContext) {
    try {
      const { id } = params
      const logro = await logros.read(id)

      return response.status(201).json({ msg: 'Información obtenida', data: logro })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
  async deleteLogro({ params, response }: HttpContext) {
    try {
      const { id } = params
      const logro = await logros.delete(id)

      return response.status(201).json({ msg: 'Eliminado', data: logro })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
}
