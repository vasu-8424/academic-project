import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';

import academicRoutes from './routes/academicRoutes';
import attendanceRoutes from './routes/attendanceRoutes';
import examsRoutes from './routes/examsRoutes';
import feesRoutes from './routes/feesRoutes';
import certificatesRoutes from './routes/certificatesRoutes';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/academics', academicRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/exams', examsRoutes);
app.use('/api/fees', feesRoutes);
app.use('/api/certificates', certificatesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
