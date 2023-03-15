
import express from "express";
const router = express.Router();
import messageController from "../controllers/messageController.js";

router.get('/api/message', messageController.getAllMessages);
router.post('/api/message', messageController.createMessage);
router.get('/api/message/:id', messageController.getMessageById);
router.put('/api/message/:id', messageController.updateMessageById);
router.delete('/api/message/:id',messageController.deleteMessageById);

export default router;