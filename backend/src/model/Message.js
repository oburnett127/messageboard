import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  replies: [],
});

const Message = mongoose.model('Message', messageSchema);

export default Message;