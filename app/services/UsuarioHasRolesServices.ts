import UsuarioHasRole from '#models/usuario_has_role'
import { DataUsuarioHasRoles } from '../interfaces/UsuarioHasRoles.js'

export default class UsuarioHasRolesServices {
  async create(data: DataUsuarioHasRoles) {
    return await UsuarioHasRole.create(data)
  }
  async read(id: any) {
    return await UsuarioHasRole.query().select().where('usuario_id', id)
  }
  async delete(id: any) {
    const logro = await UsuarioHasRole.findOrFail(id)
    return await logro.delete()
  }
}
