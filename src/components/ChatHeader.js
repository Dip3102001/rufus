import React from 'react';
import {Sparkles, ShoppingBag, Search} from 'lucide-react';

const ChatHeader = () => (
  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 shadow-lg">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
        <Sparkles size={20} className="text-white" />
      </div>
      <div className="flex-1">
        <h2 className="font-semibold text-lg">AI Shopping Assistant</h2>
        <p className="text-white/90 text-sm">Online • Ready to help you find perfect products</p>
      </div>
      <div className="flex gap-2">
        <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
          <Search size={18} />
        </button>
        <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
          <ShoppingBag size={18} />
        </button>
      </div>
    </div>
  </div>
);

export default ChatHeader;