import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'logros'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_logro')
      table.string('nombre', 45).notNullable().unique()
      table.string('descripcion', 125).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}