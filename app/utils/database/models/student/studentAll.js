import  mongoose  from "mongoose";

const subTaskSchema = new mongoose.Schema({
  CompanyId: {
    type: String,
    required: true,
  },
  listingId: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    default: 0, 
  },
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
  college : {
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

export const studentAll = mongoose.model('Student', parentSchema);

