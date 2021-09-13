/*
  Warnings:

  - Added the required column `qty` to the `RefundProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `RefundProducts` ADD COLUMN `qty` INTEGER NOT NULL;
