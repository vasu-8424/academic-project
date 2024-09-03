import { Schema, model } from 'mongoose';

const supplyRegistrationSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  subjectId: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
  appliedDate: { type: Date, required: true },
}, {
  timestamps: true
});

const SupplyRegistration = model('SupplyRegistration', supplyRegistrationSchema);
export default SupplyRegistration;
