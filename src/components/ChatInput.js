import React, { useState } from "react";
import { motion } from "framer-motion";

const ChatInput = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message here..."
        className="flex-grow p-3 text-black border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={isLoading}
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-3 rounded-r-lg focus:outline-none disabled:opacity-50 flex items-center justify-center"
        disabled={isLoading}
      >
        {isLoading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-6 h-6 border-t-2 border-white rounded-full"
          />
        ) : (
          "Send"
        )}
      </motion.button>
    </form>
  );
};

export default ChatInput;
