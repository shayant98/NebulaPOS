-- AlterTable
ALTER TABLE `Orders` ADD COLUMN `order_discount` DOUBLE,
    ADD COLUMN `order_discount_type` ENUM('MANUAL', 'CREDIT');
