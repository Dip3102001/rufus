const QuickReplies = ({ onReply }) => {
  const quickReplies = [
    "Show me sports items",
    "I need electronics",
    "What's on sale?",
    "Help me find a gift"
  ];

  return (
    <div className="flex gap-2 flex-wrap mb-4 px-4">
      {quickReplies.map((reply, index) => (
        <button
          key={index}
          onClick={() => onReply(reply)}
          className="px-3 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
        >
          {reply}
        </button>
      ))}
    </div>
  );
};

export default QuickReplies;