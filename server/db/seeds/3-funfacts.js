export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('funfacts').del()

  // Inserts seed entries
  await knex('funfacts').insert([
    {
      id: 1,
      description:
        'Octopuses have three hearts and blue blood, which makes them the ultimate goth marine animals',
      memes: 'https://imgflip.com/octopus-goth-meme',
    },
    {
      id: 2,
      description:
        'The shortest war in history was between Britain and Zanzibar in 1896, lasting just 38 minutes - basically a coffee break conflict',
      memes: 'https://imgflip.com/shortest-war-meme',
    },
    {
      id: 3,
      description:
        "Bananas are berries, but strawberries aren't - welcome to the chaotic world of botanical classification",
      memes: 'https://imgflip.com/banana-berry-meme',
    },
  ])
}
