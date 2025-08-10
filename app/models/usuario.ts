import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import Ranking from './ranking.js'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import Perfile from './perfile.js'
import UsuarioHasRole from './usuario_has_role.js'
import Recorrido from './recorrido.js'
import UsuarioHasLogro from './usuario_has_logro.js'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  declare id_usuario: number

  @column() declare email: string
  @column() declare password: string
  @column() declare auth_provider: string

  @hasMany(() => Ranking)
  declare rankings: HasMany<typeof Ranking>

  @hasOne(() => Perfile, { foreignKey: 'usuario_id' })
  declare perfil: HasOne<typeof Perfile>

  @hasMany(() => UsuarioHasRole)
  declare usuarioHasRoles: HasMany<typeof UsuarioHasRole>

  @hasMany(() => Recorrido)
  declare recorridos: HasMany<typeof Recorrido>

  @hasMany(() => UsuarioHasLogro)
  declare usuarioHasLogros: HasMany<typeof UsuarioHasLogro>
}
