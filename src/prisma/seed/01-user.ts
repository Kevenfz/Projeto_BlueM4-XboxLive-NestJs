import { Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

export const users: Prisma.UserCreateInput[] = [
  {
    name: 'Keven Ferreira Moraes',
    email: 'keven@gmail.com',
    password: 'Batatinha@123',
    cpf: "111.222.333-66",
    isAdmin: true,
  },
  {
    name: 'Diana Coelho',
    email: 'diana@gmail.com',
    password: 'Batatinha@123',
    cpf: "222.333.444-44",
    isAdmin: false,
  },
];

export const user = async (prisma: PrismaClient) => {
  for (const obj of Object.values(users)) {
    await prisma.user.upsert({
      where: { email: obj.email },
      update: {},
      create: {
        ...obj,
        password: await bcrypt.hash(obj.password, 10),
      },
    });
  }
};
