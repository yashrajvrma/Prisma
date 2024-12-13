/*
  Warnings:

  - You are about to drop the column `hide` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "hide",
ADD COLUMN     "isDisable" BOOLEAN NOT NULL DEFAULT false;
