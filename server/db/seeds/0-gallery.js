export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('gallery').del()

  // Inserts seed entries
  await knex('gallery').insert([
    {
      id: 1,
      image: '../../../Images/unicorn-programmer.jpg',
      description:
        'A majestic unicorn debugging code while wearing noise-canceling headphones and sipping a massive energy drink',
    },
    {
      id: 2,
      image: '../../../client/components/Images/unicorn-programmer.jpg',
      description:
        'Zen cat achieving the ultimate "Purr-fect Pose" - a meditation masterclass in flexible laziness',
    },
    {
      id: 3,
      image: '../../../client/components/Images/unicorn-programmer.jpg',
      description:
        'Robots attempting to learn human dance moves, with varying degrees of awkward mechanical enthusiasm',
    },
  ])
}
