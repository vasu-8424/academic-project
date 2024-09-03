import { Router } from 'express';
import SupplyRegistration from '../models/exams/SupplyRegistration';
import ReVerification from '../models/exams/ReVerification';
import SemRegistration from '../models/exams/SemRegistration';

const router = Router();

// Supply Registration Routes
router.get('/supply-registration', async (req, res) => {
  const supplyRegistrations = await SupplyRegistration.find();
  res.json(supplyRegistrations);
});

router.post('/supply-registration', async (req, res) => {
  try {
    const newSupplyRegistration = new SupplyRegistration(req.body);
    await newSupplyRegistration.save();
    res.status(201).json(newSupplyRegistration);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

// Re-Verification Routes
router.get('/re-verification', async (req, res) => {
  const reVerifications = await ReVerification.find();
  res.json(reVerifications);
});

router.post('/re-verification', async (req, res) => {
  try {
    const newReVerification = new ReVerification(req.body);
    await newReVerification.save();
    res.status(201).json(newReVerification);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

// Semester Registration Routes
router.get('/sem-registration', async (req, res) => {
  const semRegistrations = await SemRegistration.find();
  res.json(semRegistrations);
});

router.post('/sem-registration', async (req, res) => {
  try {
    const newSemRegistration = new SemRegistration(req.body);
    await newSemRegistration.save();
    res.status(201).json(newSemRegistration);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

export default router;
