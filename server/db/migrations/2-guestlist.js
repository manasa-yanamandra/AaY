export async function up(knex) {
  return knex.schema.createTable('guestlist', (table) => {
    table.increments('id')
    table.string('name')
    table.boolean('availability')
    table.string('allergies')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('guestlist')
}
