import { Router } from "express";
import * as authController from "../controllers/authController.js";
<<<<<<< HEAD
=======
import authenticate from "../middlewares/authenticate.js";
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc

const router = Router();

router.post("/login", authController.login);
<<<<<<< HEAD
=======
router.post("/register", authController.register);
router.get("/me", authenticate, authController.me);
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc

export default router;