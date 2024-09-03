"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certificates = exports.Dues = exports.Attendance = void 0;
__exportStar(require("./academics"), exports);
var Attendance_1 = require("./attendance/Attendance");
Object.defineProperty(exports, "Attendance", { enumerable: true, get: function () { return __importDefault(Attendance_1).default; } });
__exportStar(require("./exams"), exports);
var Dues_1 = require("./fees/Dues");
Object.defineProperty(exports, "Dues", { enumerable: true, get: function () { return __importDefault(Dues_1).default; } });
var Certificates_1 = require("./certificates/Certificates");
Object.defineProperty(exports, "Certificates", { enumerable: true, get: function () { return __importDefault(Certificates_1).default; } });
