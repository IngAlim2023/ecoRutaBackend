import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'usuarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_usuario')
      table.string('email',150).unique()
      table.string('password',250)
      table.string('auth_provider',175)

      
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}