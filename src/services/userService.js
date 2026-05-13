<<<<<<< HEAD
import prisma from "../models/prisma.js"
import { hashPassword } from "../utils/passwords.js";

const getAllUsers = async () => {
    const usersList = await prisma.user.findMany();
=======
import prisma from "../models/prisma.js";
import { hashPassword } from "../utils/passwords.js";

const getAllUsers = async ({ page = 1, limit = 10 }) => {
    const skip = (page - 1) * limit;

    const usersList = await prisma.user.findMany({
        skip,
        take: limit,
        select: {
            id: true,
            email: true,
            name: true,
            createdAt: true,
            updatedAt: true,
        }
    });
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
    const usersCount = await prisma.user.count();

    return {
        data: usersList,
        total: usersCount,
<<<<<<< HEAD
=======
        page,
        limit,
        totalPages: Math.ceil(usersCount / limit),
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
    };
};

const getUserById = async (id) => {
    const user = await prisma.user.findUnique({
<<<<<<< HEAD
        where: { id }
=======
        where: { id },
        select: {
            id: true,
            email: true,
            name: true,
            createdAt: true,
            updatedAt: true,
        }
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
    });

    return {
        data: user
    };
};

const createUser = async (userData) => {
    const createdUser = await prisma.user.create({
        data: {
            email: userData.email,
            name: userData.name,
            password: await hashPassword(userData.password),
<<<<<<< HEAD
=======
        },
        select: {
            id: true,
            email: true,
            name: true,
            createdAt: true,
            updatedAt: true,
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
        }
    });
    return {
        data: createdUser
    };
};

const updateUser = async (id, userData) => {
    const updatedUser = await prisma.user.update({
        where: { id },
        data: {
            ...(userData.email && { email: userData.email }),
            ...(userData.name && { name: userData.name }),
<<<<<<< HEAD
=======
        },
        select: {
            id: true,
            email: true,
            name: true,
            createdAt: true,
            updatedAt: true,
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
        }
    });

    return {
        data: updatedUser
    };
};

const deleteUser = async (id) => {
    const user = await getUserById(id);
    if (user.data) {
<<<<<<< HEAD
        return prisma.user.delete({ where: { id }});
=======
        const deletedUser = await prisma.user.delete({ where: { id } });
        return { data: deletedUser };
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
    }
    return false;
};

export {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};