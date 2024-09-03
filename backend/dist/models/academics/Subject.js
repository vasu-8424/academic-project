"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
const mongoose_1 = require("mongoose");
const SubjectSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    creditHours: { type: Number, required: true },
    syllabus: [{ type: String, required: true }],
});
exports.Subject = (0, mongoose_1.model)('Subject', SubjectSchema);
exports.default = exports.Subject;
