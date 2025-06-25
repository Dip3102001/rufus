import {useState, useRef} from 'react';
import {Camera, Send} from 'lucide-react';

const ChatInput = ({ onSendMessage, disabled }) => {
  const [input, setInput] = useState('');
  const fileInputRef = useRef(null);


    // Handle submit event
    const handleSubmit = () => {
        if (input.trim() && !disabled) {
            onSendMessage(input.trim());
            setInput('');
        }
    };

    
    // Handle key press events in the input field
    // triggered when -> Enter + without holding shift key
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };


    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                onSendMessage("Can you help me find similar products?", 'image', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2 items-center">
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
            />
            <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
                <Camera size={20} />
            </button>
            <div className="flex-1 relative">
                <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about our products..."
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-12"
                disabled={disabled}
                />
                <button
                onClick={handleSubmit}
                disabled={!input.trim() || disabled}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                <Send size={16} />
                </button>
            </div>
            </div>
        </div>
  );
};

export default ChatInput;