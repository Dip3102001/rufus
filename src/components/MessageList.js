import React, {useRef} from 'react';

const MessageList = ({ messages, isTyping }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-1">
      {messages.map((message) => {
        if (message.type === 'text') {
          return <TextMessageCard key={message.id} message={message} isUser={message.sender === 'user'} />;
        } else if (message.type === 'product') {
          return <ProductMessageCard key={message.id} message={message} />;
        } else if (message.type === 'image') {
          return <ImageMessageCard key={message.id} message={message} />;
        }
        return null;
      })}
      {isTyping && <TypingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;