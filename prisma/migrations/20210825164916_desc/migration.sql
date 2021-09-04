-- AlterTable
ALTER TABLE `Category` MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `OrderProducts` MODIFY `order_id` INTEGER,
    MODIFY `product_id` INTEGER;

-- AlterTable
ALTER TABLE `Product` MODIFY `description` TEXT NOT NULL;
