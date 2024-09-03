import { Schema, model } from 'mongoose';

const duesSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  amount: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ['Pending', 'Paid'], default: 'Pending' },
}, {
  timestamps: true
});

const Dues = model('Dues', duesSchema);
export default Dues;
