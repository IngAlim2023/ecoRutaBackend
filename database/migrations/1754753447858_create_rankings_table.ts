import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'rankings'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_rank')
      table.integer('puntos', 10).notNullable().notNullable().defaultTo(0)
      table.integer('usuario_id').unsigned().references('id_usuario').inTable('usuarios').notNullable().onDelete('CASCADE').onUpdate('CASCADE')
      
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}