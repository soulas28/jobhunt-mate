import { PrismaClient } from "./generated/prisma/client";

import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

export async function getCompanies() {
  const prisma = new PrismaClient({ adapter });
  return prisma.company.findMany();
}

export const statusItems = [
  { label: "未エントリー", value: "NOT_ENTRY" },
  { label: "IS応募済み", value: "IS_APPLIED" },
  { label: "IS終了", value: "IS_FINISHED" },
  { label: "検討中", value: "CONSIDERING" },
  { label: "内定", value: "OFFERED" },
  { label: "お祈り", value: "REJECTED" },
  { label: "辞退/非表示", value: "DECLINED" },
];

export const rankItems = [
  "S+",
  "S",
  "S-",
  "A+",
  "A",
  "A-",
  "B+",
  "B",
  "B-",
  "C",
].map((e) => {
  return { label: e, value: e };
});

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
  status: string;
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
      status: params.status,
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
  status: string;
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
      status: params.status,
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

export async function getTodos() {
  const prisma = new PrismaClient({ adapter });
  return prisma.todos.findMany();
}

export async function addTodo(params: {
  company_id: number;
  title: string;
  deadline: Date;
  note?: string;
  application_id: number;
}) {
  const prisma = new PrismaClient({ adapter });
  await prisma.todos.create({
    data: {
      company_id: params.company_id,
      application_id: params.application_id,
      title: params.title,
      deadline: params.deadline,
      is_completed: false,
      note: params.note,
    },
  });
}

export async function getTodoFromId(id: number) {
  const prisma = new PrismaClient({ adapter });
  return prisma.todos.findUnique({
    where: {
      id,
    },
  });
}
