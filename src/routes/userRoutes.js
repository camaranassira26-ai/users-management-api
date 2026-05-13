import { Router } from "express";
import * as userController from "../controllers/userController.js";
<<<<<<< HEAD

const router = Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
=======
import authenticate from "../middlewares/authenticate.js";

const router = Router();

router.get("/", authenticate, userController.getAllUsers);
router.get("/:id", authenticate, userController.getUserById);
router.post("/", authenticate, userController.createUser);
router.put("/:id", authenticate, userController.updateUser);
router.delete("/:id", authenticate, userController.deleteUser);
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc

export default router;