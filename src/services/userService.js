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
    const usersCount = await prisma.user.count();

    return {
        data: usersList,
        total: usersCount,
        page,
        limit,
        totalPages: Math.ceil(usersCount / limit),
    };
};

const getUserById = async (id) => {
    const user = await prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            email: true,
            name: true,
            createdAt: true,
            updatedAt: true,
        }
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
        },
        select: {
            id: true,
            email: true,
            name: true,
            createdAt: true,
            updatedAt: true,
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
        },
        select: {
            id: true,
            email: true,
            name: true,
            createdAt: true,
            updatedAt: true,
        }
    });

    return {
        data: updatedUser
    };
};

const deleteUser = async (id) => {
    const user = await getUserById(id);
    if (user.data) {
        const deletedUser = await prisma.user.delete({ where: { id } });
        return { data: deletedUser };
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