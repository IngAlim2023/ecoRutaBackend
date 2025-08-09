import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'perfiles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_perfil')
      table.string('nombre', 45).notNullable()
      table.string('apellido', 45).notNullable()
      table.string('nickname', 45).notNullable().unique()
      table.enum('nivel', ['bajo', 'medio', 'alto']).notNullable().defaultTo('bajo')
      table.timestamp('ultima_vez').defaultTo(this.now())
      table
        .integer('usuario_id')
        .notNullable()
        .unsigned()
        .references('id_usuario')
        .inTable('usuarios')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .unique()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
