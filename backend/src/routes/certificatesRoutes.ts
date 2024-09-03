import { Router } from 'express';
import Certificates from '../models/certificates/Certificates';

const router = Router();

// Certificates Routes
router.get('/certificates', async (req, res) => {
  const certificates = await Certificates.find();
  res.json(certificates);
});

router.post('/certificates', async (req, res) => {
  try {
    const newCertificate = new Certificates(req.body);
    await newCertificate.save();
    res.status(201).json(newCertificate);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

export default router;
