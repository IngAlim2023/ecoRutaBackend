import Logro from '#models/logro'
import { DataLogros } from '../interfaces/logros.js'

export default class LogrosServices {
  async create(data: DataLogros) {
    return await Logro.create(data)
  }
  async readAll() {
    return await Logro.all()
  }
  async readOne(id: any) {
    return await Logro.findOrFail(id)
  }
  async update(data: DataLogros, id: any) {
    const logro = await Logro.findOrFail(id)
    logro.merge(data)
    return logro.save()
  }
  async delete(id: any) {
    const logro = await Logro.findOrFail(id)
    return logro.delete()
  }
}
