import { Router } from 'express';
import Subject from '../models/academics/Subject';
import Syllabus from '../models/academics/Syllabus';
import Timetable from '../models/academics/Timetable';
import Result from '../models/academics/Result';
import Material from '../models/academics/Material';

const router = Router();

// Routes for Subjects
router.get('/subjects', async (req, res) => {
  const subjects = await Subject.find();
  res.json(subjects);
});

router.post('/subjects', async (req, res) => {
  try {
    const newSubject = new Subject(req.body);
    await newSubject.save();
    res.status(201).json(newSubject);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

// Routes for Syllabus
router.get('/syllabus', async (req, res) => {
  const syllabus = await Syllabus.find();
  res.json(syllabus);
});

router.post('/syllabus', async (req, res) => {
  try {
    const newSyllabus = new Syllabus(req.body);
    await newSyllabus.save();
    res.status(201).json(newSyllabus);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

// Routes for Timetable
router.get('/timetable', async (req, res) => {
  const timetable = await Timetable.find();
  res.json(timetable);
});

router.post('/timetable', async (req, res) => {
  try {
    const newTimetable = new Timetable(req.body);
    await newTimetable.save();
    res.status(201).json(newTimetable);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

// Routes for Results
router.get('/results', async (req, res) => {
  const results = await Result.find();
  res.json(results);
});

router.post('/results', async (req, res) => {
  try {
    const newResult = new Result(req.body);
    await newResult.save();
    res.status(201).json(newResult);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

// Routes for Materials
router.get('/materials', async (req, res) => {
  const materials = await Material.find();
  res.json(materials);
});

router.post('/materials', async (req, res) => {
  try {
    const newMaterial = new Material(req.body);
    await newMaterial.save();
    res.status(201).json(newMaterial);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

export default router;
