"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Material = void 0;
const mongoose_1 = require("mongoose");
const MaterialSchema = new mongoose_1.Schema({
    subject: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Subject', required: true },
    title: { type: String, required: true },
    description: { type: String },
    fileUrl: { type: String, required: true },
});
exports.Material = (0, mongoose_1.model)('Material', MaterialSchema);
exports.default = exports.Material;
