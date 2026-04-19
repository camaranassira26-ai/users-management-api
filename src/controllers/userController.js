import * as userService from "../services/userService.js";

const getAllUsers = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const result = await userService.getAllUsers({ page, limit });
        res.json(result);
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const result = await userService.getUserById(req.params.id);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

const createUser = async (req, res, next) => {
    try {
        const { email, name, password } = req.body;

        if (!email || !name || !password) {
            return res.status(400).json({
                message: "Email, name and password are required!!"
            });
        }

        const result = await userService.createUser(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const result = await userService.updateUser(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const result = await userService.deleteUser(req.params.id);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

export {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};