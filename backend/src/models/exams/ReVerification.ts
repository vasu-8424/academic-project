import { Schema, model } from 'mongoose';

const reVerificationSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  subjectId: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
  appliedDate: { type: Date, required: true },
  status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
}, {
  timestamps: true
});

const ReVerification = model('ReVerification', reVerificationSchema);
export default ReVerification;
