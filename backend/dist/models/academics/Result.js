"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
const mongoose_1 = require("mongoose");
const ResultSchema = new mongoose_1.Schema({
    subject: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Subject', required: true },
    studentId: { type: String, required: true },
    marksObtained: { type: Number, required: true },
    totalMarks: { type: Number, required: true },
    grade: { type: String, required: true },
});
exports.Result = (0, mongoose_1.model)('Result', ResultSchema);
exports.default = exports.Result;
