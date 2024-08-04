import React from "react";
import { motion } from "framer-motion";

const Message = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
    >
      <div
        className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg p-3 ${
          isUser
            ? "bg-teal-600 text-white"
            : "bg-gradient-to-r from-blue-100 to-teal-100 text-gray-800"
        }`}
      >
        {message.text}
      </div>
    </motion.div>
  );
};

export default Message;
