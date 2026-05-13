import * as authService from "../services/authService.js";

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required!!"
            });
        }

        const result = await authService.login({ email, password });
        res.json(result);
<<<<<<< HEAD

=======
    } catch (error) {
        next(error);
    }
};

const register = async (req, res, next) => {
    try {
        const { email, name, password } = req.body;

        if (!email || !name || !password) {
            return res.status(400).json({
                message: "Email, name and password are required!!"
            });
        }

        const result = await authService.register({ email, name, password });
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

const me = async (req, res, next) => {
    try {
        const result = await authService.me(req.userId);
        res.json(result);
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
    } catch (error) {
        next(error);
    }
};

export {
    login,
<<<<<<< HEAD
=======
    register,
    me,
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
};