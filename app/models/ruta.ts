import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { type RutasTransporteEnum } from '../interfaces/rutas.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Recorrido from './recorrido.js'

export default class Ruta extends BaseModel {
  @column({ isPrimary: true })
  declare id_ruta: number

  @column() declare origen_latitud: number
  @column() declare origen_longitud: number
  @column() declare destino_latitud: number
  @column() declare destino_longitud: number
  @column() declare transporte: RutasTransporteEnum
  @column() declare fecha_created_at: Date

  @hasMany(() => Recorrido)
  declare recorridos: HasMany<typeof Recorrido>
}
