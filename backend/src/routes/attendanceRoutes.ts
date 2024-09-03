import { Router } from 'express';
import Attendance from '../models/attendance/Attendance';

const router = Router();

// Attendance Routes
router.get('/', async (req, res) => {
  const attendance = await Attendance.find();
  res.json(attendance);
});

router.post('/', async (req, res) => {
  try {
    const newAttendance = new Attendance(req.body);
    await newAttendance.save();
    res.status(201).json(newAttendance);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

export default router;
