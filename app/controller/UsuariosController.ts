import UsuariosServices from '#services/UsuariosServices'
import { HttpContext } from '@adonisjs/core/http'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import env from '#start/env'

const newUsuario = new UsuariosServices()

export default class UsuariosController {
  async createUsuario({ request, response }: HttpContext) {
    try {
      const { email, password, auth_provider } = request.body()

      const hash = await bcrypt.hash(password, 10)

      if (!email) {
        return response.status(400).json({ msg: 'El correo es obligatorio.' })
      }

      const usuario = await newUsuario.create({ email, password: hash, auth_provider })

      return response.status(201).json({ msg: 'Creado', data: usuario })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
  async readUsuarios({ response }: HttpContext) {
    try {
      const usuarios = await newUsuario.readAll()
      return response.status(200).json({ msg: 'Información obtenidad', data: usuarios })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
  async readUsuario({ params, response }: HttpContext) {
    try {
      const { id } = params
      const usuario = await newUsuario.readOne(id)
      return response.status(200).json({ msg: 'Información obtenidad', data: usuario })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
  async login({ request, response }: HttpContext) {
    try {
      const { email, password } = request.body()
      const usuario = await newUsuario.readByEmail(email)
      if (!usuario) {
        return response.status(401).json({ msg: 'Credenciales. erradas' })
      }

      const match = await bcrypt.compare(password, usuario.password)

      if (!match) {
        return response.status(401).json({ msg: 'Credenciales. erradas' })
      }

      //Generamos el token:
      const payload = {
        id: usuario.id_usuario,
        email: usuario.email,
      }
      const key = env.get('APP_KEY')

      const token = jwt.sign(payload, key, {
        expiresIn: '1h',
      })

      return response.status(200).json({ msg: 'Autorizado', token: token, usuario:payload })
    } catch (e) {
      return response.status(500).json({ msg: 'Error interno.', error: e })
    }
  }
  async verifyToken({ request, response }: HttpContext) {
    try {
      const { token } = request.body()

      if (!token) {
        return response.status(403).json({ msg: 'No autorizado', token: '', usuario:'' })
      }

      const usuario = jwt.verify(token, env.get('APP_KEY'))
      return response.status(200).json({ msg: 'Autorizado', token:token,usuario:usuario })
    } catch (e) {
      return response.status(403).json({ msg: 'Token inválido o expirado', error: e, token: '', usuario:'' })
    }
  }
}
