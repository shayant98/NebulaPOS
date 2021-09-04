/*
  Warnings:

  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `OrderProducts` ADD COLUMN `qty` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `Orders` ADD COLUMN `item_total` DOUBLE,
    ADD COLUMN `order_tax` DOUBLE,
    ADD COLUMN `order_total` DOUBLE;

-- AlterTable
ALTER TABLE `Product` MODIFY `price` DOUBLE NOT NULL;
