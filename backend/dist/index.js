import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';
import articleRoutes from './routes/articleRoutes';
import moderationRoutes from './routes/moderationRoutes';
import searchRoutes from './routes/searchRoutes';
// Load environment variables
import dotenv from 'dotenv';
dotenv.config(); // Use ES module import for `dotenv`
// Initialize app
const app = express();
app.use(cors());
app.use(bodyParser.json());
// Connect to the database
connectDB();
// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/article', articleRoutes);
app.use('/api/moderation', moderationRoutes);
app.use('/api/search', searchRoutes);
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
