import LogrosServices from '#services/LogrosServices'
import { HttpContext } from '@adonisjs/core/http'

const logros = new LogrosServices()

export default class LogrosController {
  async createLogro({ request, response }: HttpContext) {
    try {
      const { nombre, descripcion } = request.body()
      if (!nombre || !descripcion) {
        return response.status(400).json({ msg: 'Faltan campos' })
      }
      const logro = await logros.create({ nombre, descripcion })
      return response.status(201).json({ msg: 'Creado', data: logro })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
  async readLogros({ response }: HttpContext) {
    try {
      const nLogros = await logros.readAll()

      return response.status(200).json({ msg: 'Información obtenida', data: nLogros })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
  async readLogroById({ params, response }: HttpContext) {
    try {
      const { id } = params
      const nLogro = await logros.readOne(id)

      return response.status(200).json({ msg: 'Información obtenida', data: nLogro })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
  async updateLogro({ params, request, response }: HttpContext) {
    try {
      const { id } = params
      const { descripcion } = request.body()
      if (!descripcion) {
        return response.status(400).json({ msg: 'Faltan campos' })
      }
      const logro = await logros.update({ descripcion }, id)
      return response.status(201).json({ msg: 'Actualizado', data: logro })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
  async deleteLogroById({ params, response }: HttpContext) {
    try {
      const { id } = params
      const nLogro = logros.delete(id)

      return response.status(200).json({ msg: 'IRegistro eliminado', data: nLogro })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
}
