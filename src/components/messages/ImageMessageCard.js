const ImageMessageCard = ({ message }) => (
  <div className="flex justify-end mb-4">
    <div className="flex flex-row-reverse items-end gap-2 max-w-xs">
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-500">
        <User size={16} className="text-white" />
      </div>
      <div className="bg-blue-500 text-white rounded-2xl rounded-br-md p-3">
        <img 
          src={message.imageUrl} 
          alt="Uploaded" 
          className="w-full rounded-lg mb-2"
        />
        <p className="text-sm">{message.content}</p>
        <span className="text-xs opacity-70 mt-1 block">
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  </div>
);

export default ImageMessageCard;