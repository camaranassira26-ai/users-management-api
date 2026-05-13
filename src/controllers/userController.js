<<<<<<< HEAD
import * as userService from '../services/userService.js';

const getAllUsers = async (req, res, next) => {
    try {
        const results = await userService.getAllUsers();
        res.json(results);
=======
import * as userService from "../services/userService.js";

const getAllUsers = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const result = await userService.getAllUsers({ page, limit });
        res.json(result);
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
<<<<<<< HEAD
        const userId = req.params.id;
        const user = await userService.getUserById(userId);
        res.json(user);
=======
        const result = await userService.getUserById(req.params.id);
        res.json(result);
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
    } catch (error) {
        next(error);
    }
};

const createUser = async (req, res, next) => {
    try {
<<<<<<< HEAD
        const userData = req.body;

        if (!userData.email || !userData.name || !userData.password) {
=======
        const { email, name, password } = req.body;

        if (!email || !name || !password) {
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
            return res.status(400).json({
                message: "Email, name and password are required!!"
            });
        }

<<<<<<< HEAD
        const user = await userService.createUser(userData);
        res.json(user);
=======
        const result = await userService.createUser(req.body);
        res.status(201).json(result);
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
<<<<<<< HEAD
        const userId = req.params.id;
        const userData = req.body;

        const user = await userService.updateUser(userId, userData);
        res.json(user);
=======
        const result = await userService.updateUser(req.params.id, req.body);
        res.json(result);
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (req, res, next) => {
    try {
<<<<<<< HEAD
        const userId = req.params.id;
        const deleteRes = await userService.deleteUser(userId);

        if (!deleteRes) {
            return res.json({
                message: 'User Not found!'
            });
        }
        
        res.json({
            message: 'User deleted succefully!'
        });
=======
        const result = await userService.deleteUser(req.params.id);
        res.json(result);
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
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
<<<<<<< HEAD
};
=======
};
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
