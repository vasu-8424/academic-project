"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const attendanceSchema = new mongoose_1.Schema({
    studentId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Student', required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ['Present', 'Absent', 'Late'], required: true }
}, {
    timestamps: true
});
const Attendance = (0, mongoose_1.model)('Attendance', attendanceSchema);
exports.default = Attendance;
