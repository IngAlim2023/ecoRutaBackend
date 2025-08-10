import UsuarioHasRolesServices from '#services/UsuarioHasRolesServices'
import { HttpContext } from '@adonisjs/core/http'

const roles = new UsuarioHasRolesServices()

export default class UsuarioHasRolesController {
  async createRole({ request, response }: HttpContext) {
    try {
      const { rol_id, usuario_id } = request.body()

      const rol = await roles.create({ rol_id, usuario_id })

      return response.status(201).json({ msg: 'Creado', data: rol })
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
  async readPermisos({ params, response }: HttpContext) {
    try {
      const { id } = params
      const nroles = await roles.read(id)

      return response.status(201).json({ msg: 'Información obtenida', data: nroles })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
  async deletePermiso({ params, response }: HttpContext) {
    try {
      const { id } = params
      const logro = await roles.delete(id)

      return response.status(201).json({ msg: 'Eliminado', data: logro })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
}
