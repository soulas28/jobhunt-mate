import { PrismaClient } from "./generated/prisma/client";

import { PrismaPg } from "@prisma/adapter-pg";

export const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

export async function getCompanies() {
  const prisma = new PrismaClient({ adapter });
  return prisma.company.findMany();
}

export async function getCompanyFromId(id: number) {
  const prisma = new PrismaClient({ adapter });
  return prisma.company.findUnique({
    where: {
      id,
    },
  });
}
