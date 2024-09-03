"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Subject_1 = __importDefault(require("../models/academics/Subject"));
const Syllabus_1 = __importDefault(require("../models/academics/Syllabus"));
const Timetable_1 = __importDefault(require("../models/academics/Timetable"));
const Result_1 = __importDefault(require("../models/academics/Result"));
const Material_1 = __importDefault(require("../models/academics/Material"));
const router = (0, express_1.Router)();
// Routes for Subjects
router.get('/subjects', async (req, res) => {
    const subjects = await Subject_1.default.find();
    res.json(subjects);
});
router.post('/subjects', async (req, res) => {
    try {
        const newSubject = new Subject_1.default(req.body);
        await newSubject.save();
        res.status(201).json(newSubject);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
// Routes for Syllabus
router.get('/syllabus', async (req, res) => {
    const syllabus = await Syllabus_1.default.find();
    res.json(syllabus);
});
router.post('/syllabus', async (req, res) => {
    try {
        const newSyllabus = new Syllabus_1.default(req.body);
        await newSyllabus.save();
        res.status(201).json(newSyllabus);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
// Routes for Timetable
router.get('/timetable', async (req, res) => {
    const timetable = await Timetable_1.default.find();
    res.json(timetable);
});
router.post('/timetable', async (req, res) => {
    try {
        const newTimetable = new Timetable_1.default(req.body);
        await newTimetable.save();
        res.status(201).json(newTimetable);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
// Routes for Results
router.get('/results', async (req, res) => {
    const results = await Result_1.default.find();
    res.json(results);
});
router.post('/results', async (req, res) => {
    try {
        const newResult = new Result_1.default(req.body);
        await newResult.save();
        res.status(201).json(newResult);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
// Routes for Materials
router.get('/materials', async (req, res) => {
    const materials = await Material_1.default.find();
    res.json(materials);
});
router.post('/materials', async (req, res) => {
    try {
        const newMaterial = new Material_1.default(req.body);
        await newMaterial.save();
        res.status(201).json(newMaterial);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.default = router;
