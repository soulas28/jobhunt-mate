-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rank" TEXT NOT NULL,
    "deadline" TIMESTAMP(3),
    "mypageUrl" TEXT,
    "mypageId" TEXT,
    "offeredFrom" TEXT,
    "note" TEXT,
    "canRemote" BOOLEAN,
    "canSideJob" BOOLEAN,
    "haveSecurity" BOOLEAN,
    "haveOwnProduct" BOOLEAN,
    "avgOvertime" INTEGER,
    "salary" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);
