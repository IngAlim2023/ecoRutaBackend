import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Usuario from './usuario.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Ranking extends BaseModel {
  @column({ isPrimary: true })
  declare id_rank: number

  @column() declare puntos: number
  @column() declare usuario_id: number

  @belongsTo(()=> Usuario, {foreignKey:'usuario_id'})
  declare usuario: BelongsTo<typeof Usuario>

}