"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const duesSchema = new mongoose_1.Schema({
    studentId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Student', required: true },
    amount: { type: Number, required: true },
    dueDate: { type: Date, required: true },
    status: { type: String, enum: ['Pending', 'Paid'], default: 'Pending' },
}, {
    timestamps: true
});
const Dues = (0, mongoose_1.model)('Dues', duesSchema);
exports.default = Dues;
