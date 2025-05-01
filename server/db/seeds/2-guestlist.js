export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('guestlist').del()

  // Inserts seed entries
  await knex('guestlist').insert([
    {
      id: 1,
      name: 'Dr. Awkward McSocialskills',
      availability: false,
      allergies:
        'Extreme allergic reaction to boring conversations and networking',
    },
    {
      id: 2,
      name: 'Captain Indecisive',
      availability: true,
      allergies: 'Severe allergy to making firm plans',
    },
    {
      id: 3,
      name: 'Snack Enthusiast Extraordinaire',
      availability: true,
      allergies: 'Deadly reaction to diet plans and portion control',
    },
  ])
}
