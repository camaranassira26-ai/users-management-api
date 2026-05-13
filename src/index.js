import 'dotenv/config';
import express from 'express';
import morgan from "morgan";
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.json({
        message: 'welcome to HETIC users management API!!'
    });
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`)
});