import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'rutas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_ruta')
      table.decimal('origen_latitud', 20,17).notNullable()
      table.decimal('origen_longitud', 20,17).notNullable()
      table.decimal('destino_latitud', 20,17).notNullable()
      table.decimal('destino_longitud', 20,17).notNullable()
      table.enum('transporte', ['bicicleta', 'caminata', 'transporte_publico']).notNullable()
      table.timestamp('fecha_created_at').defaultTo(this.now())
      
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}