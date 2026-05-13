import prisma from "./../src/models/prisma.js"

try {
    await prisma.$connect();
    console.log("Database connected successfully!!");

    const result = await prisma.$queryRaw`SELECT NOW()`;
    console.log("Database time:", result[0].now);
} catch {
<<<<<<< HEAD
    console.error("Connection failed:", error.message)
}finally{
    await prisma.$disconnect();
}

=======
    console.error("Connection failed:", error.message);
} finally {
    await prisma.$disconnect();
}
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
