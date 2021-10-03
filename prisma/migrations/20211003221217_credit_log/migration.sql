-- CreateTable
CREATE TABLE `CreditLog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `type` ENUM('ADD', 'SUBTRACT') NOT NULL DEFAULT 'ADD',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CreditLog` ADD CONSTRAINT `CreditLog_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `Customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
