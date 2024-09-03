import { Schema, model } from 'mongoose';

const attendanceSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['Present', 'Absent', 'Late'], required: true }
}, {
  timestamps: true
});

const Attendance = model('Attendance', attendanceSchema);
export default Attendance;
