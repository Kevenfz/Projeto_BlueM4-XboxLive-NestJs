import { Prisma, PrismaClient } from '@prisma/client';

export const generos: Prisma.GeneroCreateInput[] = [
  {
    genero: 'Ação-aventura',
  },
  {
    genero: 'FPS',
  },
  {
    genero: 'Simulação',
  },
  {
    genero: 'Esporte',
  },
  {
    genero: 'Survivor horror',
  },
  {
    genero: 'Tiro em terceira pessoa',
  },
];

export const genero = async (prisma: PrismaClient) => {
  for (const obj of Object.values(generos)) {
    await prisma.genero.upsert({
      where: { genero: obj.genero },
      update: {},
      create: {
        ...obj,
      },
    });
  }
};
