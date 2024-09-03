"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SupplyRegistration_1 = __importDefault(require("../models/exams/SupplyRegistration"));
const ReVerification_1 = __importDefault(require("../models/exams/ReVerification"));
const SemRegistration_1 = __importDefault(require("../models/exams/SemRegistration"));
const router = (0, express_1.Router)();
// Supply Registration Routes
router.get('/supply-registration', async (req, res) => {
    const supplyRegistrations = await SupplyRegistration_1.default.find();
    res.json(supplyRegistrations);
});
router.post('/supply-registration', async (req, res) => {
    try {
        const newSupplyRegistration = new SupplyRegistration_1.default(req.body);
        await newSupplyRegistration.save();
        res.status(201).json(newSupplyRegistration);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
// Re-Verification Routes
router.get('/re-verification', async (req, res) => {
    const reVerifications = await ReVerification_1.default.find();
    res.json(reVerifications);
});
router.post('/re-verification', async (req, res) => {
    try {
        const newReVerification = new ReVerification_1.default(req.body);
        await newReVerification.save();
        res.status(201).json(newReVerification);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
// Semester Registration Routes
router.get('/sem-registration', async (req, res) => {
    const semRegistrations = await SemRegistration_1.default.find();
    res.json(semRegistrations);
});
router.post('/sem-registration', async (req, res) => {
    try {
        const newSemRegistration = new SemRegistration_1.default(req.body);
        await newSemRegistration.save();
        res.status(201).json(newSemRegistration);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.default = router;
