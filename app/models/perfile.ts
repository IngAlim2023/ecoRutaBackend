import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Usuario from './usuario.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { PerfilesNivelEnum } from '../interfaces/perfiles.js'

export default class Perfile extends BaseModel {
  @column({ isPrimary: true })
  declare id_perfil: number

  @column() declare nombre: string
  @column() declare apellido: string
  @column() declare nickname: string
  @column() declare nivel: PerfilesNivelEnum
  @column() declare ultima_vez: Date
  @column() declare usuario_id: number

  @belongsTo(() => Usuario, { foreignKey: 'usuario_id' })
  declare usuario: BelongsTo<typeof Usuario>
}
