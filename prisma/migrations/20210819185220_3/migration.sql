/*
  Warnings:

  - A unique constraint covering the columns `[product_variations_id]` on the table `ProductDetails` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `ProductDetails_product_variations_id_unique` ON `ProductDetails`(`product_variations_id`);
