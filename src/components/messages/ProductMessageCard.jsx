import React from 'react';
import {Bot, Star, Heart} from 'lucide-react';

const ProductMessageCard = ({ message }) => (
  <div className="flex justify-start mb-4">
    <div className="flex flex-row items-end gap-2 max-w-md">
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
        <Bot size={16} className="text-white" />
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md shadow-sm p-4">
        <p className="text-sm text-gray-800 mb-3">{message.content}</p>
        <div className="grid gap-3">
          {message.products.map(product => (
            <div key={product.id} className="flex gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-gray-900 truncate">{product.name}</h4>
                <p className="text-xs text-gray-600 mt-1 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold text-blue-600">${product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-600">{product.rating}</span>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-white rounded-lg transition-colors">
                <Heart size={16} className="text-gray-400 hover:text-red-500" />
              </button>
            </div>
          ))}
        </div>
        <span className="text-xs opacity-70 mt-2 block">
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  </div>
);

export default ProductMessageCard;