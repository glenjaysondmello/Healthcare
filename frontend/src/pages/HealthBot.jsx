import React, { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import axios from "axios";

const HealthBot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your AI health assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // Modify the axios post request in HealthBot component
  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, isBot: false };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/healthbot", {
        message: input,
      });
      const botResponse = { text: response.data.message, isBot: true };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      console.error("Error fetching bot response:", error);
      const errorMessage = {
        text: "I'm sorry, I'm having trouble processing your request right now. Please try again later.",
        isBot: true,
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-4/5 lg:w-1/5 h-[500px] border-2 border-black border-solid mt-10 mx-auto lg:ml-20 rounded-[30px] bg-[#64F9FA]">
        <div className="mt-12 w-full flex items-center justify-center">
          <div>
            <img
              src="src/assets/images/profile.png"
              alt="profile"
              className="w-24 h-24 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
            />
          </div>
        </div>
        <div className="font-bold flex justify-center w-full mt-4">
          Glen Jayson Dmello
        </div>
        <div className="w-full flex justify-center mt-4">
          <button className="font-bold px-4 py-1 bg-green-500 border-none text-white rounded-xl">
            Log Out
          </button>
        </div>
        <div className="bg-gray-100 w-52 p-2 rounded-2xl mx-auto lg:ml-12 mt-6 lg:mr-10">
          Hii Glen!,Welcome back
        </div>
        <div className="w-full flex flex-col items-center mt-10">
          <p className="text-gray-400">Yesterday</p>
          <div>Greeting Exchange...</div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 lg:w-4/5">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-[#64f9fa] text-black px-6 py-4">
            <h2 className="text-xl font-semibold">Health Bot Chat</h2>
          </div>
          <div className="h-96 overflow-y-auto p-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${message.isBot ? "text-left" : "text-right"}`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    message.isBot ? "bg-gray-100" : "bg-blue-500 text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-center">
                <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="border-t p-4">
            <div className="flex items-center">
              <input
                type="text"
                className="flex-grow mr-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
                onClick={handleSendMessage}
                disabled={isLoading}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthBot;
