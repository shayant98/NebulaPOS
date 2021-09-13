/*
  Warnings:

  - You are about to drop the column `order_product_id` on the `Refunds` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Refunds` DROP FOREIGN KEY `Refunds_ibfk_2`;

-- AlterTable
ALTER TABLE `Refunds` DROP COLUMN `order_product_id`;

-- CreateTable
CREATE TABLE `RefundProducts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `refund_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RefundProducts` ADD FOREIGN KEY (`refund_id`) REFERENCES `Refunds`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RefundProducts` ADD FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
