import Usuario from '#models/usuario'
import Rol from '#models/rol'
import UsuarioHasRole from '#models/usuario_has_role'
import { DataUsuarios } from '../interfaces/usuarios.js'

export default class UsuariosServices {
  async create(data: DataUsuarios) {
    const adminRole = await Rol.firstOrCreate({ nombre: 'admin' })
    const userRole = await Rol.firstOrCreate({ nombre: 'usuario' })
    const usuario = await Usuario.create(data)

    const totalUsuarios = Number((await Usuario.query().count('* as total'))[0].$extras.total)
    const rolId = totalUsuarios === 1 ? adminRole.id_rol : userRole.id_rol

    await UsuarioHasRole.create({
      rol_id: rolId,
      usuario_id: usuario.id_usuario
    })
    
    return usuario
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
