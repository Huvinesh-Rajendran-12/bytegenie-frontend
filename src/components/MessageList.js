import React from "react";
import Message from "./Message";
import DOMPurify from "dompurify";
import parse, { domToReact } from "html-react-parser";

const MessageList = ({ messages }) => {
  const renderContent = (content) => {
    // Sanitize the content
    const sanitizedContent = DOMPurify.sanitize(content);

    // Parse the sanitized HTML
    const options = {
      replace: (domNode) => {
        if (domNode.type === "tag" && domNode.name === "table") {
          return (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                {domToReact(domNode.children, options)}
              </table>
            </div>
          );
        }
      },
    };

    const parsedContent = parse(sanitizedContent, options);

    // Ensure we're returning an array of elements
    return Array.isArray(parsedContent)
      ? parsedContent
      : [parsedContent];
  };

  return (
    <div className="space-y-4">
      {messages.map((message, index) =>
        message.formatted ? (
          <div
            key={index}
            className="bg-teal-100 bg-opacity-30 text-white p-4 rounded-lg shadow-md backdrop-blur-sm"
          >
            <p className="font-bold mb-2">
              {message.sender === "ai" ? "ByteGenie AI" : "You"}
            </p>
            {renderContent(message.text)}
          </div>
        ) : (
          <Message key={index} message={message} />
        ),
      )}
    </div>
  );
};

export default MessageList;
