"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Dues_1 = __importDefault(require("../models/fees/Dues"));
const router = (0, express_1.Router)();
// Fees Routes
router.get('/dues', async (req, res) => {
    const dues = await Dues_1.default.find();
    res.json(dues);
});
router.post('/dues', async (req, res) => {
    try {
        const newDues = new Dues_1.default(req.body);
        await newDues.save();
        res.status(201).json(newDues);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.default = router;
