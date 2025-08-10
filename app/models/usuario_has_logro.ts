import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Usuario from './usuario.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Logro from './logro.js'

export default class UsuarioHasLogro extends BaseModel {
  public static table = 'usuario_has_logros'
  @column({ isPrimary: true })
  declare id_usu_log: number

  @column({columnName:'usuario_id'}) declare usuario_id: number
  @column({columnName:'logro_id'}) declare logro_id: number

  @belongsTo(()=> Usuario, {foreignKey:'usuario_id'})
  declare usuario: BelongsTo<typeof Usuario>

  @belongsTo(()=> Logro, {foreignKey:'logro_id'})
  declare logro: BelongsTo<typeof Logro>

}