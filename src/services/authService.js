import prisma from "../models/prisma.js";
import { comparePasswords } from "../utils/passwords.js";
import { generateToken } from "../utils/tokens.js";

const login = async ({ email, password }) => {
    // Find if user exists
    const user = await prisma.user.findUnique({
        where: { email }
    });

    if (!user) {
        const error = new Error("Invalid email or password");
        error.statusCode = 401;
        throw error;
    }

    // Compare passwords
    const isPasswordValid = await comparePasswords(password, user.password);

    if (!isPasswordValid) {
        const error = new Error("Invalid email or password");
        error.statusCode = 401;
        throw error;
    }

    // Generate token ← était en dehors de la fonction, corrigé ici
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

export { 
    login 
};