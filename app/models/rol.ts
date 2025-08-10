import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import UsuarioHasRole from './usuario_has_role.js'

export default class Rol extends BaseModel {
  public static table = 'roles'
  @column({ isPrimary: true })
  declare id_rol: number

  @column() declare nombre: string

  @hasMany(() => UsuarioHasRole)
  declare usuarioHasRoles: HasMany<typeof UsuarioHasRole>
}
