import { Prisma, PrismaClient } from '@prisma/client';

export const games: Prisma.GameCreateInput[] = [
  {
    title: 'GTA 5',
    imgUrl:
      'https://s2.glbimg.com/pVUTlvwHrlm44bi3yyYTOElUzw8=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/1/9/8cOmg9TkaB2PgkS1sUjQ/2013-04-02-gta5-capa-rockstar-.jpg',
    description:
      'Grand Theft Auto V é um jogo eletrônico de ação-aventura que pode ser jogado a partir de uma perspectiva em terceira pessoa ou primeira pessoa.',
    year: '17/10/2013',
    score: 5,
    traillerYtUrl: 'https://www.youtube.com/watch?v=QkkoHAzjnUs',
    GplayYtUrl: 'https://www.youtube.com/watch?v=gHtKJ9cWCaA',
  },
];

export const game = async (prisma: PrismaClient) => {
  for (const obj of Object.values(games)) {
    await prisma.game.upsert({
      where: { title: obj.title },
      update: {},
      create: {
        ...obj,
      },
    });
  }
};
