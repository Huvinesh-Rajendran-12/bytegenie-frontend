import React from "react";
import Message from "./Message";

const MessageList = ({ messages, FormattedResponse }) => {
  return (
    <div className="space-y-4">
      {messages.map((message, index) =>
        message.formatted ? (
          <FormattedResponse
            key={index}
            response={message.text}
          />
        ) : (
          <Message key={index} message={message} />
        ),
      )}
    </div>
  );
};

export default MessageList;
