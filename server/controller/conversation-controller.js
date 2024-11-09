
import Conversation from "../model/Conversation.js";

export const newConversation = async(request, response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;
        
        const exists = await conversation.findOne({ members :{ $all: [receiverId, senderId ]}});

        if(exists){
            return response.status(200).json("Conversation already exists");
        }

        const newConversation = new conversation({
            members: [senderId, receiverId]
        });

        await newConversation.save();
        return response.status(200).json('Conversation saved successfully.');
    } catch (error) {
        response.status(500).json(error.message);
    }
}

export const getConversation = async (request, response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;
        
        // If IDs are missing, return an error
        if (!senderId || !receiverId) {
            return response.status(400).json({ error: 'Sender or receiver ID is missing' });
        }

        let conversation = await Conversation.findOne({ members: { $all: [receiverId, senderId] } });
                // Log if no conversation is found
        if (!conversation) {
            console.log('No conversation found');
            return response.status(404).json({ message: 'No conversation found' });
        }

        return response.status(200).json(conversation);
        
    } catch (error) {
        response.status(500).json(error.message);
    }
}