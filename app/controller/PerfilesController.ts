import PerfilesServices from '#services/PerfilesServices'
import { HttpContext } from '@adonisjs/core/http'
const perfile = new PerfilesServices()

export default class PerfilesController {
  async createPerfil({ request, response }: HttpContext) {
    try {
      const { nombre, apellido, nickname, nivel, ultima_vez, usuario_id } = request.body()

      const nickExist = await perfile.findByNick(nickname)
      if (nickExist) return response.status(403).json({ msg: 'El nickname existe' })

      const nPerfile = await perfile.create({
        nombre,
        apellido,
        nickname,
        nivel,
        ultima_vez,
        usuario_id,
      })
      return response.status(201).json({ msg: 'Creado', data: nPerfile })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e.message })
    }
  }
  async readPerfil({ params, response }: HttpContext) {
    try {
      const { id } = params

      const profile = await perfile.findProfile(id)

      return response.status(201).json({ msg: 'Encontrado', data: profile })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e.message })
    }
  }
  async validaNickname({ params, response }: HttpContext) {
    try {
      const { nick } = params

      if (!nick) {
        return response.status(400).json({ msg: 'El nickname es requerido' })
      }

      const nickExist = await perfile.findByNick(nick)

      if (nickExist) {
        return response.status(200).json({ msg: 'El nickname existe', disponible:false })
      }

      return response.status(200).json({ msg: 'Nickname disponible', disponible:true })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e.message })
    }
  }

  async actualizarUltimaVez({ params, response }: HttpContext) {
    try {
      const { id } = params
      const fechaHora = new Date()
      await perfile.lastTime(fechaHora, id)
      return response.status(200).json({ msg: 'Actualizado' })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
}
