/* eslint-disable @typescript-eslint/naming-convention */
import RutasServices from '#services/RutasServices'
import { HttpContext } from '@adonisjs/core/http'

const rutas = new RutasServices()

export default class RutasController {
  async createRoute({ request, response }: HttpContext) {
    try {
      const {
        nombre,
        origen_latitud,
        origen_longitud,
        destino_latitud,
        destino_longitud,
        transporte,
        fecha_created_at,
      } = request.body()

      const data = {
        nombre,
        origen_latitud,
        origen_longitud,
        destino_latitud,
        destino_longitud,
        transporte,
        fecha_created_at,
      }

      const newRouta = await rutas.create(data)

      return response.status(201).json({ msg: 'Creado', data: newRouta })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
  async readAllRoutes({ response }: HttpContext) {
    try {
      const nRutas = await rutas.read()
      return response.status(200).json({ msg: 'Informacion obtenida', data: nRutas })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
  async readRouteById({ params, response }: HttpContext) {
    try {
      const { id } = params
      const nRutas = await rutas.readById(id)
      return response.status(200).json({ msg: 'Informacion obtenida', data: nRutas })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
  async Route({ params, response }: HttpContext) {
    try {
      const { id } = params
      await rutas.delete(id)
      return response.status(200).json({ msg: 'Eliminado' })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
  async updateRoute({ params, request, response }: HttpContext) {
    try {
      const { id } = params
      const {
        origen_latitud,
        origen_longitud,
        destino_latitud,
        destino_longitud,
        transporte,
        fecha_created_at,
      } = request.body()

      const data = {
        origen_latitud,
        origen_longitud,
        destino_latitud,
        destino_longitud,
        transporte,
        fecha_created_at,
      }

      const newRouta = await rutas.update(data, id)
      return response.status(200).json({ msg: 'Actualizado', data: newRouta })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
  async deleteRoute({ params, response }: HttpContext) {
    try {
      const { id } = params
      await rutas.delete(id)
      return response.status(200).json({ msg: 'Eliminado' })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
}
