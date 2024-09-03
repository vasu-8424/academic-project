"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reVerificationSchema = new mongoose_1.Schema({
    studentId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Student', required: true },
    subjectId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Subject', required: true },
    appliedDate: { type: Date, required: true },
    status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
}, {
    timestamps: true
});
const ReVerification = (0, mongoose_1.model)('ReVerification', reVerificationSchema);
exports.default = ReVerification;
