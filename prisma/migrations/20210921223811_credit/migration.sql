/*
  Warnings:

  - Added the required column `loyalty_credit` to the `Customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Customers` ADD COLUMN `loyalty_credit` DOUBLE NOT NULL;
