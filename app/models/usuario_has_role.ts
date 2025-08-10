import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Rol from './rol.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Usuario from './usuario.js'

export default class UsuarioHasRole extends BaseModel {
  public static table = 'usuario_has_roles'
  @column({ isPrimary: true })
  declare id_usu_rol: number
  @column() declare rol_id: number
  @column() declare usuario_id: number

  @belongsTo(() => Rol, { foreignKey: 'rol_id' })
  declare rol: BelongsTo<typeof Rol>

  @belongsTo(() => Usuario, { foreignKey: 'usuario_id' })
  declare usuario: BelongsTo<typeof Usuario>
}
