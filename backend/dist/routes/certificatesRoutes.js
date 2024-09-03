"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Certificates_1 = __importDefault(require("../models/certificates/Certificates"));
const router = (0, express_1.Router)();
// Certificates Routes
router.get('/certificates', async (req, res) => {
    const certificates = await Certificates_1.default.find();
    res.json(certificates);
});
router.post('/certificates', async (req, res) => {
    try {
        const newCertificate = new Certificates_1.default(req.body);
        await newCertificate.save();
        res.status(201).json(newCertificate);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.default = router;
