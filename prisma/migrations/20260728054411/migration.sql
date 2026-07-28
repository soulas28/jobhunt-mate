/*
  Warnings:

  - Added the required column `is_completed` to the `Todos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todos" ADD COLUMN     "is_completed" BOOLEAN NOT NULL;
