import React from "react";

const Message = ({ message }) => {
  const isAI = message.sender === "ai";
  const messageClass = isAI
    ? "bg-teal-100 bg-opacity-30 text-white"
    : "bg-blue-100 bg-opacity-30 text-white";

  return (
    <div
      className={`p-4 rounded-lg shadow-md ${messageClass} backdrop-blur-sm`}
    >
      <p className="font-bold mb-2">{isAI ? "AI" : "You"}</p>
      <p>{message.text}</p>
    </div>
  );
};

export default Message;
