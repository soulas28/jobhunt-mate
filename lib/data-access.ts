import { PrismaClient } from "./generated/prisma/client";

import { PrismaPg } from "@prisma/adapter-pg";

export const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

export async function getCompanies() {
  const prisma = new PrismaClient({ adapter });
  return prisma.company.findMany();
}
