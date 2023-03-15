import Message from '../model/Message.js';

// Create a new message
const createMessage = async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.status(201).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read all messages
const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json({ messages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read a single message by ID
const getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update a message by ID
const updateMessageById = async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a message by ID
const deleteMessageById = async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.status(200).json({ message: 'Message deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export default  { createMessage, getAllMessages, getMessageById, updateMessageById, deleteMessageById }