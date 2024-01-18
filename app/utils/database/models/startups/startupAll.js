import  mongoose  from "mongoose";

const subsubTaskSchema = new mongoose.Schema({
  student_id : {
    type: String,
    required: true,
  },
  intern_name : {
    type: String,
    required: true,
  },
  intern_email : {
    type: String,
    required: true,
  },
  inter_college : {
    type: String,
    required: true,
  },
})

const subTaskSchema = new mongoose.Schema({
  lname: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  stipend: {
    type: Number,
    default: 0, 
  },
  duration: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  applicants: [
    {
      type: subsubTaskSchema,
    },
  ],
});

const parentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  desc : {
    type: String,
    required: true,
  },
  listings: [
    {
      type: subTaskSchema,
    },
  ],
});

mongoose.models = {}

export const startupAll = mongoose.model('Startup', parentSchema);

