"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Syllabus = void 0;
const mongoose_1 = require("mongoose");
const SyllabusSchema = new mongoose_1.Schema({
    subject: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Subject', required: true },
    topics: [{ type: String, required: true }],
});
exports.Syllabus = (0, mongoose_1.model)('Syllabus', SyllabusSchema);
exports.default = exports.Syllabus;
