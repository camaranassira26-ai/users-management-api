import 'dotenv/config';
import express from 'express';
import morgan from "morgan";
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
<<<<<<< HEAD
=======
import movieRoutes from './routes/movieRoutes.js';
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
import errorHandler from './middlewares/errorHandler.js';

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get('/', (req, res) => {
<<<<<<< HEAD
    res.json({
        message: 'welcome to HETIC users management API!!'
    });
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
=======
  res.json({
    message: 'Welcome to HETIC users management!!'
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc

app.use(errorHandler);

app.listen(PORT, () => {
<<<<<<< HEAD
    console.log(`Server is running on https://localhost:${PORT}`)
=======
  console.log(`Server is running on http://localhost:${PORT}`);
>>>>>>> bcf5ab1479cfc1598961efd5ab5e0c5e61c4dbdc
});