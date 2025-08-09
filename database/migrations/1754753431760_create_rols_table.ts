import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'roles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_rol')
      table.string('nombre', 25).notNullable().unique()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}