<<<<<<< HEAD
import prisma from "../models/prisma.js";
import { comparePasswords } from "../utils/passwords.js";
import { generateToken } from "../utils/tokens.js";

const login = async ({ email, password }) => {
    // Find if user exists
=======
import prisma from "../models/prisma.js"
import { comparePasswords, hashPassword } from "../utils/passwords.js";
import { generateToken } from "../utils/token.js";

const login = async ({ email, password }) => {
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
    const user = await prisma.user.findUnique({
        where: { email }
    });

    if (!user) {
        const error = new Error("Invalid email or password");
        error.statusCode = 401;
        throw error;
    }

<<<<<<< HEAD
    // Compare passwords
=======
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
    const isPasswordValid = await comparePasswords(password, user.password);

    if (!isPasswordValid) {
        const error = new Error("Invalid email or password");
        error.statusCode = 401;
        throw error;
    }

<<<<<<< HEAD
    // Generate token ← était en dehors de la fonction, corrigé ici
=======
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
    const token = generateToken(user.id);

    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
        token,
    };
};

<<<<<<< HEAD
export { 
    login 
=======
const register = async ({ email, name, password }) => {
    const existingUser = await prisma.user.findUnique({
        where: { email }
    });

    if (existingUser) {
        const error = new Error("Email already in use");
        error.statusCode = 409;
        throw error;
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
        data: {
            email,
            name,
            password: hashedPassword,
        }
    });

    const token = generateToken(user.id);

    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
        token,
    };
};

const me = async (userId) => {
    const user = await prisma.user.findUnique({
        where: { id: userId }
    });

    if (!user) {
        const error = new Error("User not found");
        error.statusCode = 404;
        throw error;
    }

    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        }
    };
};

export {
    login,
    register,
    me,
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
};