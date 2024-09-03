"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const supplyRegistrationSchema = new mongoose_1.Schema({
    studentId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Student', required: true },
    subjectId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Subject', required: true },
    appliedDate: { type: Date, required: true },
}, {
    timestamps: true
});
const SupplyRegistration = (0, mongoose_1.model)('SupplyRegistration', supplyRegistrationSchema);
exports.default = SupplyRegistration;
