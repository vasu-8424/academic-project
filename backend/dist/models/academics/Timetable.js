"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timetable = void 0;
const mongoose_1 = require("mongoose");
const TimetableSchema = new mongoose_1.Schema({
    subject: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Subject', required: true },
    day: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    room: { type: String, required: true },
});
exports.Timetable = (0, mongoose_1.model)('Timetable', TimetableSchema);
exports.default = exports.Timetable;
