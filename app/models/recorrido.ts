import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Usuario from './usuario.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Ruta from './ruta.js'

export default class Recorrido extends BaseModel {
  @column({ isPrimary: true })
  declare id_recorrido: number

  @column() declare fecha: Date
  @column() declare distancia: number
  @column() declare tiempo_minutos: number
  @column() declare co2: number
  @column() declare ruta_id: number
  @column() declare usuario_id: number

  @belongsTo(() => Ruta, { foreignKey: 'ruta_id' })
  declare ruta: BelongsTo<typeof Ruta>

  @belongsTo(() => Usuario, { foreignKey: 'usuario_id' })
  declare usuario: BelongsTo<typeof Usuario>
}
