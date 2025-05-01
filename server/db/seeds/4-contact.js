export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('contact').del()

  // Inserts seed entries
  await knex('contact').insert([
    {
      id: 1,
      name: 'Captain Procrastination',
      phone: '(555) LATER-NOW',
      message:
        'I was going to write a detailed message, but... eh, maybe tomorrow.',
    },
    {
      id: 2,
      name: 'Sir Caffeine Overdose',
      phone: '(555) BUZZ-BUZZ',
      message:
        "IS THIS CONTACT FORM WORKING? I CAN'T TELL BECAUSE I'VE HAD 17 ESPRESSOS TODAY!!!",
    },
    {
      id: 3,
      name: 'Princess of Autocorrect',
      phone: '(555) OOPS-TYPO',
      message:
        'I meant to send a serious inquiry but my phone thinks otherwise. Duck you, autocorrect!',
    },
  ])
}
