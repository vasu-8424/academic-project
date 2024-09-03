"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const semRegistrationSchema = new mongoose_1.Schema({
    studentId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Student', required: true },
    semester: { type: Number, required: true },
    registrationDate: { type: Date, required: true },
}, {
    timestamps: true
});
const SemRegistration = (0, mongoose_1.model)('SemRegistration', semRegistrationSchema);
exports.default = SemRegistration;
