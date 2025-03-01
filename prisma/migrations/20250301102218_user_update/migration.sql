/*
  Warnings:

  - You are about to drop the column `cdate` on the `game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `game` DROP COLUMN `cdate`,
    ADD COLUMN `date` DATETIME(3) NULL;
