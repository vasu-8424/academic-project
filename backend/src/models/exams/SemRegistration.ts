import { Schema, model } from 'mongoose';

const semRegistrationSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  semester: { type: Number, required: true },
  registrationDate: { type: Date, required: true },
}, {
  timestamps: true
});

const SemRegistration = model('SemRegistration', semRegistrationSchema);
export default SemRegistration;
