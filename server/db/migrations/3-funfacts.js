export async function up(knex) {
  return knex.schema.createTable('funfacts', (table) => {
    table.increments('id')
    table.string('description')
    table.string('memes')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('funfacts')
}
