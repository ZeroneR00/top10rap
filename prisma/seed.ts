import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    await prisma.rapper.deleteMany({})
    await prisma.tag.deleteMany({})
    await prisma.album.deleteMany({})
    await prisma.award.deleteMany({})

    console.log('🗑️ Cleared database')

    const tags = await prisma.tag.createMany({
        data: [
            { name: 'Хип-хоп' },
            { name: 'Россия' },
            { name: 'Новый school' },
            { name: 'Легенда' },
            { name: 'США' },
        ]
    })
    console.log(`Created ${tags.count} tags`)


    await prisma.rapper.create({
        data: {
            name: 'Kanye West',
            slug: 'kanye-west',
            image: '/images/rappers/photo.jpg',
            rank: 1,
            bio: 'Kanye West is an American rapper, songwriter, and fashion designer. He is one of the most influential and successful artists of the 21st century.',
            tags: {
                connect: [{ name: 'Хип-хоп' }, { name: 'Легенда' }]  // связь!
            },
            albums: {
                create: [
                    { name: 'The Eminem Show', year: 2002 },
                    { name: 'Slim Shady LP', year: 1999 },
                ]
            },
            awards: {
                create: [
                    { name: 'Grammy Award' },
                ]
            }
        }
    })

    await prisma.rapper.create({
        data: {
            name: 'Kizaru',
            slug: 'kizaru',
            image: '/images/rappers/photo.jpg',
            rank: 2,
            bio: 'Kizaru is a Russian rapper. He is one of the most influential and successful artists of the 21st century.',
            tags: {
                connect: [{ name: 'Хип-хоп' }, { name: 'Россия' }, { name: 'Новый school' }]  // связь!
            },
            albums: {
                create: [
                    { name: 'The Eminem Show', year: 2002 },
                    { name: 'Slim Shady LP', year: 1999 },
                ]
            },
            awards: {
                create: [
                    { name: 'Grammy Award' },
                ]
            }
        }
    })

    await prisma.rapper.create({
        data: {
            name: 'Eminem',
            slug: 'eminem',
            image: '/images/rappers/photo.jpg',
            rank: 3,
            bio: 'Eminem is an American rapper, songwriter, and producer. He is one of the most influential and successful artists of the 21st century.',
            tags: {
                connect: [{ name: 'Хип-хоп' }, { name: 'США' }, { name: 'Легенда' }]  // связь!
            },
            albums: {
                create: [
                    { name: 'The Eminem Show', year: 2002 },
                    { name: 'Slim Shady LP', year: 1999 },
                ]
            },
            awards: {
                create: [
                    { name: 'Grammy Award' },
                ]
            }
        }
    })

    await prisma.rapper.create({
        data: {
            name: 'Skrip',
            slug: 'skrip',
            image: '/images/rappers/photo.jpg',
            rank: 4,
            bio: 'Skrip is a Russian rapper. He is one of the most influential and successful artists of the 21st century.',
            tags: {
                connect: [{ name: 'Хип-хоп' }, { name: 'Россия' }, { name: 'Новый school' }]
            },
            albums: {
                create: [
                    { name: 'The Eminem Show', year: 2002 },
                    { name: 'Slim Shady LP', year: 1999 },
                ]
            },
            awards: {
                create: [
                    { name: 'Grammy Award' },
                ]
            }
        }
    })
    // const rappers = await prisma.rapper.createMany({
    //     data: [
    //         { name: 'Kanye West', slug: 'kanye-west', image: '/public/images/rappers/photo.jpg', rank: 1, bio: 'Kanye West is an American rapper, songwriter, and fashion designer. He is one of the most influential and successful artists of the 21st century.', },
    //         { name: 'Kizaru', slug: 'kizaru', image: '/public/images/rappers/photo.jpg', rank: 2, bio: 'Kizaru is a Russian rapper. He is one of the most influential and successful artists of the 21st century.' },
    //         { name: 'Eminem', slug: 'eminem', image: '/public/images/rappers/photo.jpg', rank: 3, bio: 'Eminem is an American rapper, songwriter, and producer. He is one of the most influential and successful artists of the 21st century.' },
    //         { name: 'Skrip', slug: 'skrip', image: '/public/images/rappers/photo.jpg', rank: 4, bio: 'Skrip is a Russian rapper. He is one of the most influential and successful artists of the 21st century.' },
    //     ]
    // })
    // console.log(`Created ${rappers.count} rappers`)


    // 1. Сначала создаём теги
    // 2. Потом создаём рэперов и связываем с тегами
}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect()
    })