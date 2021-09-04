/*
  Warnings:

  - You are about to drop the `ProductDetails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VariationValues` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Variations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `productVariants` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `payment_type` on table `Orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `item_total` on table `Orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `order_tax` on table `Orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `order_total` on table `Orders` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ProductDetails` DROP FOREIGN KEY `ProductDetails_ibfk_2`;

-- DropForeignKey
ALTER TABLE `ProductDetails` DROP FOREIGN KEY `ProductDetails_ibfk_3`;

-- DropForeignKey
ALTER TABLE `VariationValues` DROP FOREIGN KEY `VariationValues_ibfk_1`;

-- DropForeignKey
ALTER TABLE `productVariants` DROP FOREIGN KEY `productVariants_ibfk_1`;

-- AlterTable
ALTER TABLE `OrderProducts` ALTER COLUMN `qty` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Orders` MODIFY `payment_type` VARCHAR(191) NOT NULL,
    MODIFY `item_total` DOUBLE NOT NULL,
    MODIFY `order_tax` DOUBLE NOT NULL,
    MODIFY `order_total` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `image` VARCHAR(191),
    ADD COLUMN `quantity` INTEGER NOT NULL;

-- DropTable
DROP TABLE `ProductDetails`;

-- DropTable
DROP TABLE `VariationValues`;

-- DropTable
DROP TABLE `Variations`;

-- DropTable
DROP TABLE `productVariants`;

-- CreateTable
CREATE TABLE `RefundTypes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Refunds` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `refund_request` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ammount_refunded` DOUBLE NOT NULL,
    `refund_type` INTEGER NOT NULL,
    `order_id` INTEGER NOT NULL,
    `order_product_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Refunds` ADD FOREIGN KEY (`order_id`) REFERENCES `Orders`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Refunds` ADD FOREIGN KEY (`order_product_id`) REFERENCES `OrderProducts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Refunds` ADD FOREIGN KEY (`refund_type`) REFERENCES `RefundTypes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
