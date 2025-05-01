export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('songs').del()

  // Inserts seed entries
  await knex('songs').insert([
    {
      id: 1,
      album: 'Procrastination Anthems',
      artist: 'The Deadline Dodgers',
      song: "I'll Do It Tomorrow (Maybe)",
      url: 'client/components/mp3/Ill Do It Tomorrow [Original Song].mp3',
    },
    {
      id: 2,
      album: 'Caffeine Dreams',
      artist: 'Espresso Existentials',
      song: 'Wired and Tired',
      url: 'client/components/mp3/Wired and Tired.mp3',
    },
    {
      id: 3,
      album: 'Coding Nightmares',
      artist: 'Debug Squad',
      song: 'Semicolon Blues',
      url: 'client/components/mp3/Dangling Semicolon Blues - Git Grooving (🎶 Developer Music 🎶).mp3',
    },
  ])
}
