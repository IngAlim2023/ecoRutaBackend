import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'recorridos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_recorrido')
      table.timestamp('fecha').notNullable().defaultTo(this.now())
      table.decimal('distancia').notNullable()
      table.integer('tiempo_minutos').unsigned().notNullable()
      table.decimal('co2', 5, 2).notNullable()

      table
        .integer('ruta_id')
        .notNullable()
        .unsigned()
        .references('id_ruta')
        .inTable('rutas')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .integer('usuario_id')
        .notNullable()
        .unsigned()
        .references('id_usuario')
        .inTable('usuarios')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
