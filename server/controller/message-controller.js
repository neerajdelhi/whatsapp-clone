import Message from "../model/Message.js";
import Conversation from "../model/Conversation.js";

export const newMessage = async (request, response) => {
    try {
        const newmessage = new Message(request.body);
        await newmessage.save();

        await Conversation.findByIdAndUpdate(request.body.conversationId, {message: request.body.text} )
        response.status(200).json('Message has been sent successfully');
    } catch (error) {
        response.status(500).json(error.message);
    }
}

export const getMessages = async (request, response) => {
    try {
        const message = await Message.find({ conversationId : request.params.id });
        return response.status(200).json(message);
    } catch (error) {
        response.status(500).json(error.message);
    }
}