import ChatFooter from "./ChatFooter";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import QuickReplies from "./QuickReplies";


const ChatPanel = ({ messages, isTyping, onSendMessage, showQuickReplies }) => (
  <div className="flex flex-col h-full">
    <MessageList messages={messages} isTyping={isTyping} />
    {showQuickReplies && <QuickReplies onReply={onSendMessage} />}
    <ChatInput onSendMessage={onSendMessage} disabled={isTyping} />
    <ChatFooter />
  </div>
);