/*
  Warnings:

  - You are about to drop the `RefundTypes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Refunds` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Refunds` DROP FOREIGN KEY `Refunds_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `Refunds` DROP FOREIGN KEY `Refunds_order_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `Refunds` DROP FOREIGN KEY `Refunds_refund_type_fkey`;

-- DropTable
DROP TABLE `RefundTypes`;

-- DropTable
DROP TABLE `Refunds`;

-- CreateTable
CREATE TABLE `Stores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserStores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `store_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `UserStores_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserStores` ADD CONSTRAINT `UserStores_store_id_fkey` FOREIGN KEY (`store_id`) REFERENCES `Stores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserStores` ADD CONSTRAINT `UserStores_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
