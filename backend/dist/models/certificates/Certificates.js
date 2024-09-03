"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const certificatesSchema = new mongoose_1.Schema({
    studentId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Student', required: true },
    certificateType: { type: String, enum: ['Completion', 'Merit', 'Distinction'], required: true },
    issueDate: { type: Date, required: true },
    details: { type: String },
}, {
    timestamps: true
});
const Certificates = (0, mongoose_1.model)('Certificates', certificatesSchema);
exports.default = Certificates;
