/*
  Warnings:

  - You are about to drop the column `session_token` on the `session` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[token]` on the table `session` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "session_session_token_key";

-- AlterTable
ALTER TABLE "session" DROP COLUMN "session_token";

-- CreateIndex
CREATE UNIQUE INDEX "session_token_key" ON "session"("token");
