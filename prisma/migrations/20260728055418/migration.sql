-- AlterTable
ALTER TABLE "Todos" ADD COLUMN     "application_id" INTEGER,
ALTER COLUMN "note" DROP NOT NULL;
