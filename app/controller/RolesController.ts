import RolesServices from '#services/RolesServices'
import { HttpContext } from '@adonisjs/core/http'

const roles = new RolesServices()

export default class RolesController {
  async createRol({ request, response }: HttpContext) {
    try {
      const { nombre } = request.body()
      if (!nombre) return response.status(400).json({ msg: 'Faltan datos' })
      const newRol = await roles.create({ nombre })

      return response.status(201).json({ msg: 'Creado', data: newRol })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
  async readRoles({ response }: HttpContext) {
    try {
      const nRoles = await roles.readAll()
      return response.status(200).json({ msg: 'Información obtenida', data: nRoles })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
  async updateRol({ params, request, response }: HttpContext) {
    try {
      const { nombre } = request.body()
      const { id } = params
      if (!nombre) return response.status(400).json({ msg: 'Faltan datos' })
      const newRol = await roles.update({ nombre }, id)

      return response.status(201).json({ msg: 'Actualizado', data: newRol })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
  async deleteRol({ params, response }: HttpContext) {
    try {
      const { id } = params
      const rol = await roles.delete(id)
      return response.status(200).json({ msg: 'Eliminado', data: rol })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
}
