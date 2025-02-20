import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import propertyRoutes from './routes/propertyRoutes';
import authRoutes from './routes/authRoutes';
import connectDB from './config/db'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

connectDB();

app.use('/api/properties', propertyRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
