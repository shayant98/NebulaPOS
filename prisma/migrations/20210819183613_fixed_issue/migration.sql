/*
  Warnings:

  - You are about to drop the column `product_id` on the `ProductDetails` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `ProductDetails` DROP FOREIGN KEY `ProductDetails_ibfk_1`;

-- AlterTable
ALTER TABLE `ProductDetails` DROP COLUMN `product_id`,
    ADD COLUMN `variation_value_id` INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE `ProductDetails` ADD FOREIGN KEY (`variation_value_id`) REFERENCES `VariationValues`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
