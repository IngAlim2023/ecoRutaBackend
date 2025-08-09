import Usuario from '#models/usuario'
import { DataUsuarios } from '../interfaces/usuarios.js'

export default class UsuariosServices {
  async create(data: DataUsuarios) {
    return await Usuario.create(data)
  }
  async findAll() {
    return await Usuario.all()
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
}
