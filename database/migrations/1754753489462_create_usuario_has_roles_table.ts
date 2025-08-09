import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'usuario_has_roles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_usu_rol')
      table
        .integer('rol_id')
        .notNullable()
        .unsigned()
        .references('id_rol')
        .inTable('roles')
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