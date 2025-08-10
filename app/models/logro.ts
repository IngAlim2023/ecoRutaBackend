import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import UsuarioHasLogro from './usuario_has_logro.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Logro extends BaseModel {
  public static table = 'logros'
  @column({ isPrimary: true })
  declare id_logro: number

  @column() declare nombre: string
  @column() declare descripcion: string

  @hasMany(() => UsuarioHasLogro)
  declare usuarioHasLogros: HasMany<typeof UsuarioHasLogro>
}
