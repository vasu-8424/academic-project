import { Router } from 'express';
import Dues from '../models/fees/Dues';

const router = Router();

// Fees Routes
router.get('/dues', async (req, res) => {
  const dues = await Dues.find();
  res.json(dues);
});

router.post('/dues', async (req, res) => {
  try {
    const newDues = new Dues(req.body);
    await newDues.save();
    res.status(201).json(newDues);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

export default router;
