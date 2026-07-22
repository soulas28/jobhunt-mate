import { PrismaClient } from "./generated/prisma/client";

import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
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

export async function addCompany(params: {
  name: string;
  rank: string;
  mypageUrl?: string;
  mypageId?: string;
  offeredFrom?: string;
  salary?: string;
  canSideJob?: boolean;
  canRemote?: boolean;
  haveOwnProduct?: boolean;
  haveSecurity?: boolean;
  avgOvertime?: number;
  note?: string;
}) {
  const prisma = new PrismaClient({ adapter });
  await prisma.company.create({
    data: {
      name: params.name,
      rank: params.rank,
      mypageUrl: params.mypageUrl,
      mypageId: params.mypageId,
      offeredFrom: params.offeredFrom,
      salary: params.salary,
      canSideJob: params.canSideJob,
      canRemote: params.canRemote,
      haveOwnProduct: params.haveOwnProduct,
      haveSecurity: params.haveSecurity,
      avgOvertime: params.avgOvertime,
      note: params.note,
    },
  });
}

export async function updateCompany(params: {
  id: number;
  name: string;
  rank: string;
  mypageUrl?: string;
  mypageId?: string;
  offeredFrom?: string;
  salary?: string;
  canSideJob?: boolean;
  canRemote?: boolean;
  haveOwnProduct?: boolean;
  haveSecurity?: boolean;
  avgOvertime?: number;
  note?: string;
}) {
  const prisma = new PrismaClient({ adapter });
  await prisma.company.update({
    where: {
      id: params.id,
    },
    data: {
      name: params.name,
      rank: params.rank,
      mypageUrl: params.mypageUrl,
      mypageId: params.mypageId,
      offeredFrom: params.offeredFrom,
      salary: params.salary,
      canSideJob: params.canSideJob,
      canRemote: params.canRemote,
      haveOwnProduct: params.haveOwnProduct,
      haveSecurity: params.haveSecurity,
      avgOvertime: params.avgOvertime,
      note: params.note,
    },
  });
}
