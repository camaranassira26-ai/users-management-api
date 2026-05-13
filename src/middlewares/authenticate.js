<<<<<<< HEAD
import { verifyToken } from "../utils/tokens.js";
=======
import { verifyToken } from "../utils/token.js";
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc

const authenticate = async (req, res, next) => {
    try {
        const autheHeader = req.headers.authorization;

        if (!autheHeader || !autheHeader.startsWith("Bearer ")) {
            return res.status(401).json({
<<<<<<< HEAD
                message: "Authentication failed!!"
=======
                message: 'Authentication failed!!'
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
            });
        }

        const token = autheHeader.split(" ")[1];
<<<<<<< HEAD

=======
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
        const decodedToken = verifyToken(token);

        req.userId = decodedToken.userId;

        next();
    } catch (error) {
<<<<<<< HEAD
        res.status(500).json({
            message: "Authentication failed"
=======
        return res.status(401).json({
            message: 'Authentication failed!!'
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
        });
    }
};

<<<<<<< HEAD
export { authenticate };
=======
export default authenticate;
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
