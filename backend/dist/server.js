"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const academicRoutes_1 = __importDefault(require("./routes/academicRoutes"));
const attendanceRoutes_1 = __importDefault(require("./routes/attendanceRoutes"));
const examsRoutes_1 = __importDefault(require("./routes/examsRoutes"));
const feesRoutes_1 = __importDefault(require("./routes/feesRoutes"));
const certificatesRoutes_1 = __importDefault(require("./routes/certificatesRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Connect to MongoDB
(0, db_1.default)();
// Middleware to parse JSON
app.use(express_1.default.json());
// Routes
app.use('/api/academics', academicRoutes_1.default);
app.use('/api/attendance', attendanceRoutes_1.default);
app.use('/api/exams', examsRoutes_1.default);
app.use('/api/fees', feesRoutes_1.default);
app.use('/api/certificates', certificatesRoutes_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
