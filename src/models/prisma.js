import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
<<<<<<< HEAD
const prisma = new PrismaClient({ adapter});

export default prisma;


=======

const prisma = new PrismaClient({ adapter });

export default prisma;
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
