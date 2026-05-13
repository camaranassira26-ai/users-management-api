<<<<<<< HEAD
import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword; // ← was returning hashPassword (the function!)
};

export const comparePasswords = async (password, hashedPassword) => {
    const isPasswordValid = await bcrypt.compare(password, hashedPassword); // ← was using hashPassword instead of hashedPassword
    return isPasswordValid;
};
=======
import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    return hashedPassword;
};

export const comparePasswords = async (password, passwordHash) => {
    const isPwdValid = await bcrypt.compare(password, passwordHash);
    return isPwdValid;
};
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
