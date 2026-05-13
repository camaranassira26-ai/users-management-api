import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword; // ← was returning hashPassword (the function!)
};

export const comparePasswords = async (password, hashedPassword) => {
    const isPasswordValid = await bcrypt.compare(password, hashedPassword); // ← was using hashPassword instead of hashedPassword
    return isPasswordValid;
};