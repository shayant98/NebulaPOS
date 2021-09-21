-- DropForeignKey
ALTER TABLE `OrderProducts` DROP FOREIGN KEY `OrderProducts_ibfk_2`;

-- DropForeignKey
ALTER TABLE `OrderProducts` DROP FOREIGN KEY `OrderProducts_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Refunds` DROP FOREIGN KEY `Refunds_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Refunds` DROP FOREIGN KEY `Refunds_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Refunds` DROP FOREIGN KEY `Refunds_ibfk_3`;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_brand_id_fkey` FOREIGN KEY (`brand_id`) REFERENCES `Brands`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderProducts` ADD CONSTRAINT `OrderProducts_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderProducts` ADD CONSTRAINT `OrderProducts_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Orders`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Refunds` ADD CONSTRAINT `Refunds_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Refunds` ADD CONSTRAINT `Refunds_order_product_id_fkey` FOREIGN KEY (`order_product_id`) REFERENCES `OrderProducts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Refunds` ADD CONSTRAINT `Refunds_refund_type_fkey` FOREIGN KEY (`refund_type`) REFERENCES `RefundTypes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `Customers` RENAME INDEX `Customers.loyalty_number_unique` TO `Customers_loyalty_number_key`;

-- RenameIndex
ALTER TABLE `Orders` RENAME INDEX `Orders.order_nr_unique` TO `Orders_order_nr_key`;
