/*
  Warnings:

  - You are about to drop the column `location` on the `Orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Orders` DROP COLUMN `location`,
    ADD COLUMN `payment_type` VARCHAR(191);
