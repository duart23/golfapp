/*
  Warnings:

  - You are about to drop the column `createdAt` on the `game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `game` DROP COLUMN `createdAt`,
    ADD COLUMN `cdate` DATETIME(3) NULL,
    MODIFY `courseName` VARCHAR(191) NULL,
    MODIFY `location` VARCHAR(191) NULL,
    MODIFY `numberOfHoles` INTEGER NULL,
    MODIFY `parTotal` INTEGER NULL,
    MODIFY `holePars` JSON NULL,
    MODIFY `courseRating` DOUBLE NULL,
    MODIFY `score` INTEGER NULL;
