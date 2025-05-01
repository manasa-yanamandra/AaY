export async function up(knex) {
  return knex.schema.createTable('contact', (table) => {
    table.increments('id')
    table.string('name')
    table.string('phone')
    table.string('message')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('contact')
}
