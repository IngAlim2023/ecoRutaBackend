import UsuariosServices from '#services/UsuariosServices'
import { HttpContext } from '@adonisjs/core/http'
import  bcrypt  from 'bcrypt'

const newUsuario = new UsuariosServices()

export default class UsuariosController {
  async createUsuario({ request, response }: HttpContext) {
    try {
      const { email, password, auth_provider } = request.body()

      const hash = await bcrypt.hash(password, 10)

      if(!email){
        return response.status(400).json({ msg: 'El correo es obligatorio.' })
      }

      const usuario = await newUsuario.create({ email, password: hash, auth_provider })

      return response.status(201).json({ msg: 'Creado', data: usuario })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
}
