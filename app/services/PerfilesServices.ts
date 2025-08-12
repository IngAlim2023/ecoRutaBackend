import Perfile from '#models/perfile'
import { DataPerfil } from '../interfaces/perfiles.js'

export default class PerfilesServices {
  async create(data: DataPerfil) {
    return await Perfile.create(data)
  }
  async findByNick(nick: string) {
    if (!nick) return null
    const perfil = await Perfile.findBy('nickname', nick)
    return perfil
  }
  async findProfile(id:any){
    return await Perfile.query().select().where('usuario_id', id);
  }
  async lastTime(ultima_vez: Date, id: any) {
    const user = await Perfile.findOrFail(id)
    user.ultima_vez = ultima_vez;
    return user.save()
  }
}
