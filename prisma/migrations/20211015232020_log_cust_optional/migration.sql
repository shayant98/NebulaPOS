-- DropForeignKey
ALTER TABLE `CreditLog` DROP FOREIGN KEY `CreditLog_customer_id_fkey`;

-- AlterTable
ALTER TABLE `CreditLog` MODIFY `customer_id` INTEGER;

-- AddForeignKey
ALTER TABLE `CreditLog` ADD CONSTRAINT `CreditLog_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `Customers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
