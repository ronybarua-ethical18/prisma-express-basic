/*
  Warnings:

  - You are about to drop the column `content` on the `Catergory` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Catergory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Catergory" DROP COLUMN "content",
DROP COLUMN "published",
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "authorId" DROP NOT NULL;
