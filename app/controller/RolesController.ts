import RolesServices from '#services/RolesServices'
import { HttpContext } from '@adonisjs/core/http'

export default class RolesController {
  async createRol({ request, response }: HttpContext) {
    try {
      const { nombre } = request.body()
      if (!nombre) return response.status(400).json({ msg: 'Faltan datos' })

      const newRol = await new RolesServices().create({ nombre })
      return response.status(201).json({
        msg: 'Creado',
        data: { id: newRol.id_rol, nombre: newRol.nombre },
      })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e.message })
    }
  }

  async readRoles({ response }: HttpContext) {
    try {
      const nRoles = await new RolesServices().readAll()
      const mapped = nRoles.map((r) => ({
        id: r.id_rol,
        nombre: r.nombre,
      }))
      return response.status(200).json({ msg: 'Información obtenida', data: mapped })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e.message })
    }
  }

  async updateRol({ params, request, response }: HttpContext) {
    try {
      const { nombre } = request.body()
      const { id } = params

      if (!nombre || !id) return response.status(400).json({ msg: 'Faltan datos' })

      const existing = await new RolesServices().readById(Number(id))
      if (!existing) return response.status(404).json({ msg: 'Rol no encontrado' })

      const updatedRol = await new RolesServices().update({ nombre }, Number(id))
      return response.status(200).json({
        msg: 'Actualizado',
        data: { id: updatedRol.id_rol, nombre: updatedRol.nombre },
      })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e.message })
    }
  }

  async deleteRol({ params, response }: HttpContext) {
    try {
      const { id } = params
      if (!id) return response.status(400).json({ msg: 'ID requerido' })

      const existing = await new RolesServices().readById(Number(id))
      if (!existing) return response.status(404).json({ msg: 'Rol no encontrado' })

      const deletedRol = await new RolesServices().delete(Number(id))
      return response.status(200).json({
        msg: 'Eliminado',
        data: { id: deletedRol.id_rol, nombre: deletedRol.nombre },
      })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e.message })
    }
  }
}