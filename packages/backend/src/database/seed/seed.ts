import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: 'Daniel Ribeiro',
      email: 'neto.daniribeiro@gmail.com',
      passwordHash: await bcrypt.hash('proffy@123', 10),
      Class: {
        create: {
          subject: 'Matemática',
          cost: 80,
          ClassSchedules: {
            createMany: {
              data: [
                { from: 100, to: 120, weekDay: 1 },
                { from: 200, to: 300, weekDay: 2 },
              ],
            },
          },
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      name: 'Gabriel Henrique',
      email: 'gabriel@mail.com',
      passwordHash: await bcrypt.hash('proffy@123', 10),
      Class: {
        create: {
          subject: 'Português',
          cost: 1,
          ClassSchedules: {
            createMany: {
              data: [
                { from: 3000, to: 3400, weekDay: 1 },
                { from: 3500, to: 3600, weekDay: 2 },
              ],
            },
          },
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
