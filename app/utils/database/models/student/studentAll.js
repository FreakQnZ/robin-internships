import  mongoose  from "mongoose";

const subTaskSchema = new mongoose.Schema({
  startupId: {
    type: String,
    required: true,
  },
  startupName : {
    type: String,
    required: true,
  },
  listingId: {
    type: String,
    required: true,
  },
  listingName: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    default: 0, 
  },

});

const LorSchema = new mongoose.Schema({
  lorLink: {
    type: String,
    required: true,
  },
})

const parentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  Domains: {
    type: String,
    required: true,
  },
  yearOfGraduation: {
    type: Number,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  college : {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  portfolio: {
    type: String,
    required: true,
  },
  Lor: [
    {
      type: LorSchema,
    },
  ],
  listings: [
    {
      type: subTaskSchema,
    },
  ],
});

mongoose.models = {}

export const studentAll = mongoose.model('Student', parentSchema);

