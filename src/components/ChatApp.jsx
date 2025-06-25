import React, {useState} from 'react';
import ChatHeader from './components/ChatHeader';
import ChatPanel from './compartments/ChatPanel';

const ChatApp = ()=>{
    const [messages, setMessages] = useState([
        {
        id: 1,
        type: 'text',
        sender: 'bot',
        content: "Hi! I'm your AI shopping assistant. I can help you find products, answer questions, and provide recommendations. What are you looking for today?",
        timestamp: new Date()
        }
    ]);
    
    const [isTyping, setIsTyping] = useState(false);
    const [showQuickReplies, setShowQuickReplies] = useState(true);


    const generateBotResponse = async (userMessage) =>{
        // TODO : Write logic to handle response...
    }

    const handleSendMessage = (content, type = 'text', imageUrl = null) => {
        const userMessage = {
        id: Date.now(),
        type: type,
        sender: 'user',
        content,
        imageUrl,
        timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setIsTyping(true);
        setShowQuickReplies(false);

        const botResponse = await generateBotResponse(content);

        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
    };

    return (
        <div className="max-w-md mx-auto h-screen bg-gray-100 flex flex-col shadow-2xl">
            <ChatHeader />
            <ChatPanel 
                messages={messages}
                isTyping={isTyping}
                onSendMessage={handleSendMessage}
                showQuickReplies={showQuickReplies && messages.length <= 2}
            />
        </div>
  );
};

export default chatApp;