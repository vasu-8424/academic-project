import { Schema, model } from 'mongoose';

const certificatesSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  certificateType: { type: String, enum: ['Completion', 'Merit', 'Distinction'], required: true },
  issueDate: { type: Date, required: true },
  details: { type: String },
}, {
  timestamps: true
});

const Certificates = model('Certificates', certificatesSchema);
export default Certificates;
