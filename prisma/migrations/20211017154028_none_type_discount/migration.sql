-- AlterTable
ALTER TABLE `Orders` MODIFY `order_discount_type` ENUM('MANUAL', 'CREDIT', 'NONE');
