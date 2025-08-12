import Rol from '#models/rol'
import { DataRoles } from '../interfaces/roles.js'

export default class RolesServices {
  async create(data: DataRoles) {
    return await Rol.create(data)
  }

  async readAll() {
    return await Rol.all()
  }

  async readById(id: number) {
    return await Rol.find(id)
  }

  async update(data: DataRoles, id: number) {
    const rol = await Rol.findOrFail(id)
    rol.nombre = data.nombre
    return await rol.save()
  }

  async delete(id: number) {
    const rol = await Rol.findOrFail(id)
    await rol.delete()
    return rol
  }
}
