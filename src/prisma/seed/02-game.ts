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
  {
    title: 'FIFA 22',
    imgUrl:
      'https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png',
    description:
      'Powered by Football, EA SPORTS FIFA 22 deixa o jogo ainda mais real com avanços fundamentais de jogabilidade e uma nova temporada de inovações em todos os modos.',
    year: '27/10/2021',
    score: 5,
    traillerYtUrl: 'https://www.youtube.com/watch?v=SYsi5QuOJNE',
    GplayYtUrl: 'https://www.youtube.com/watch?v=vLj-27T-SEQ',
  },
  {
    title: 'Resident Evil Village',
    imgUrl:
      'https://cdn.cdkeys.com/500x706/media/catalog/product/r/e/resident_evil_village_pc_cover.jpg',
    description:
      'Chris Redfield, o lendário herói da série Resident Evil, se reaproxima do casal e atrapalha terrivelmente sua vida, levando Ethan ao caos. Ethan, devastado, encontra-se em uma remota vila coberta de neve, procurando respostas depois de ser jogado em um pesadelo totalmente novo.',
    year: '02/05/2021',
    score: 5,
    traillerYtUrl: 'https://www.youtube.com/watch?v=Qge5m24C5qs',
    GplayYtUrl: 'https://www.youtube.com/watch?v=arEdruKxrQ8',
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
