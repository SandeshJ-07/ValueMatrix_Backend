import mongoose from "mongoose";
import user from "./userSchema.js";

const jobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  jobDesc: {
    type: String,
    required: true,
  },
  createTime: {
    type: Date,
    default: Date.now(),
  },
 uploadBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: user
  }, 
  location: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
    enum:['Internship', 'Full-Time','Part-Time','Freelancing']
  },
  applicants: {
    type: Array(mongoose.Schema.Types.Array.ObjectId),
    ref: user
  },
  validTill: {
    type: Date,
  },
  hiringOrganization: {
    type: String,
    // type: Company
    required: true,
  },
  basicSalary: {
    type: Number,
    required: false,
  },
});


const job = mongoose.model("job", jobSchema);
export default job;