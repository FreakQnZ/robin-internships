import mongoose from "mongoose";

const userAllSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['startup', 'student'],
  },
});

mongoose.models = {}

export const userAll = mongoose.model('userAll', userAllSchema);