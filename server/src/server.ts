import express from 'express';
import { apiRouter } from './api';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use('/', apiRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
