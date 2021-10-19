const { PrismaClient } = require("@prisma/client");
const faker = require("faker");

const prisma = new PrismaClient();

const main = async () => {
  await prisma.product.deleteMany({});
  // Delete all orders
  // Delete all categories
  await prisma.category.deleteMany({});
  // Delete all products

  await prisma.orders.deleteMany({});
  // Delete all orderProducts
  await prisma.orderProducts.deleteMany({});
  // Delete all giftcard
  await prisma.giftcard.deleteMany({});
  // Delete all brands
  await prisma.brands.deleteMany({});
  // Delete all users
  await prisma.users.deleteMany({});
  // Delete all stores
  await prisma.stores.deleteMany({});

  // Delete all customers
  await prisma.customers.deleteMany({});

  console.log("Seeding categories with products...");
  for (let index = 0; index < 10; index++) {
    await prisma.category.create({
      data: {
        name: faker.commerce.department(),
        description: faker.lorem.words(30),
        image: faker.image.fashion(),
        products: {
          createMany: {
            data: [1, 2, 3, 4, 5].map((index) => {
              return {
                name: faker.commerce.productName(),
                price: faker.datatype.float(),
                quantity: faker.datatype.number(),
                description: faker.commerce.productDescription(),
                image: faker.image.fashion(),
              };
            }),
          },
          //   create: {
          //     Brands: {
          //       connectOrCreate: {
          //         create: {
          //           name: faker.company.companyName(),
          //         },
          //       },
          //     },
          //   },
        },
      },
    });
  }
  console.log("Seeding customers with loyalty points...");
  for (let index = 0; index < 20; index++) {
    await prisma.customers.create({
      data: {
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        email: faker.internet.email(),
        birthday: faker.date.past(),
        loyalty_number: `${faker.datatype.number({
          min: 100,
          max: 999,
        })}-${faker.datatype.number({
          min: 100,
          max: 999,
        })}-${faker.datatype.number({
          min: 100,
          max: 999,
        })}`,
        loyalty_credit: faker.datatype.float(),
      },
    });
  }
  console.log("Seeding stores with employees...");
  for (let index = 0; index < 20; index++) {
    await prisma.users.create({
      data: {
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        username: faker.internet.userName(),
        password: "123456",
        Stores: {
          create: {
            name: faker.company.companyName(),
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            country: faker.address.country(),
          },
        },
      },
    });
  }
  console.log("Seeding giftcards...");
  for (let index = 0; index < 20; index++) {
    await prisma.giftcard.create({
      data: {
        value: faker.datatype.number(400),
      },
    });
  }
};

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
