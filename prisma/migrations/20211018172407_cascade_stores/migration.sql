/*
  Warnings:

  - You are about to drop the `UserStores` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `storesId` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `UserStores` DROP FOREIGN KEY `UserStores_store_id_fkey`;

-- DropForeignKey
ALTER TABLE `UserStores` DROP FOREIGN KEY `UserStores_user_id_fkey`;

-- AlterTable
ALTER TABLE `Users` ADD COLUMN `storesId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `UserStores`;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_storesId_fkey` FOREIGN KEY (`storesId`) REFERENCES `Stores`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
