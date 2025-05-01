export async function up(knex) {
  return knex.schema.createTable('gallery', (table) => {
    table.increments('id')
    table.string('image')
    table.string('description')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('gallery')
}
