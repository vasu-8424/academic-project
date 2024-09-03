"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Attendance_1 = __importDefault(require("../models/attendance/Attendance"));
const router = (0, express_1.Router)();
// Attendance Routes
router.get('/', async (req, res) => {
    const attendance = await Attendance_1.default.find();
    res.json(attendance);
});
router.post('/', async (req, res) => {
    try {
        const newAttendance = new Attendance_1.default(req.body);
        await newAttendance.save();
        res.status(201).json(newAttendance);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.default = router;
