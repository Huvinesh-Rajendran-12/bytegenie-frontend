import React, { useState, useEffect, useRef } from "react";
import ChatInput from "./components/ChatInput";
import MessageList from "./components/MessageList";
import StepsList from "./components/StepsList";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [steps, setSteps] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (message) => {
    setIsLoading(true);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, sender: "user" },
    ]);
    setSteps([]);

    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_PYTHON_API,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question: message,
            session_id: sessionId,
          }),
        },
      );

      const newSessionId = response.headers.get("X-Session-ID");
      if (newSessionId) {
        setSessionId(newSessionId);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullResponse = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const updates = chunk
          .split("\n")
          .filter(Boolean)
          .map(JSON.parse);

        updates.forEach((update) => {
          if (update.step === "Final Answer") {
            fullResponse += update.message;
          } else {
            setSteps((prevSteps) => [...prevSteps, update]);
          }
        });
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: fullResponse,
          sender: "ai",
          formatted: true,
        },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "An error occurred while processing your request.",
          sender: "ai",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-900 to-teal-800 text-white p-4">
        <h1 className="text-3xl font-bold text-center">
          ByteGenie Data Explorer
        </h1>
      </header>
      <div className="flex flex-grow overflow-hidden">
        {/* Chat Section */}
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-3/5 bg-gradient-to-b from-blue-900 to-teal-800 text-white flex flex-col"
        >
          <div className="flex-grow overflow-y-auto p-4">
            <MessageList messages={messages} />
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t border-teal-700">
            <ChatInput
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
            />
          </div>
        </motion.div>

        {/* Processing Steps Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-2/5 p-6 overflow-y-auto bg-white"
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">
            Processing Steps
          </h2>
          <AnimatePresence>
            {steps.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <StepsList steps={steps} />
              </motion.div>
            )}
          </AnimatePresence>
          {steps.length === 0 && !isLoading && (
            <p className="text-gray-500">
              No steps to display. Ask a question to see the
              process!
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default App;
