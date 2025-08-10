import Usuario from '#models/usuario'
import { DataUsuarios } from '../interfaces/usuarios.js'

export default class UsuariosServices {
  async create(data: DataUsuarios) {
    return await Usuario.create(data)
  }
  async readAll() {
    return await Usuario.query().select('id_usuario', 'email')
  }
  async readOne(id: any) {
    return await Usuario.query().select('id_usuario', 'email').where('id_usuario', id).firstOrFail()
  }
  async update(data: DataUsuarios, id: any) {
    const user = await Usuario.findOrFail(id)
    user.merge(data)
    return await user.save()
  }
  async delete(id: any) {
    const usuario = await Usuario.findOrFail(id)
    return await usuario.delete()
  }
  async readByEmail(email: string) {
    return await Usuario.query()
      .select('id_usuario', 'email', 'password', 'auth_provider')
      .where('email', email)
      .first()
  }
}
