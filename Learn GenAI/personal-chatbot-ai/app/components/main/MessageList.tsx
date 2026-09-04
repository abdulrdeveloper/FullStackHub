"use client";

import { useState, useEffect, useRef } from "react";
import ChatBotData from "../../data/hitesh_chatbot.json";

type Messages = {
  id: number;
  sender : "user" | "bot";
  text: string
}

function findUserRes(input: string) {
  const text = input.toLowerCase().trim();

  for (const intent of ChatBotData.intents) {
    for (const pattern of intent.patterns) {
      if (text.includes(pattern.toLowerCase())) {
        return intent.responses[Math.floor(Math.random() * intent.responses.length)];
      }
    }
  }
  return "I'm sorry, I didn't understand that.";
}

export default function MessageList(){
  const [messages, setMessages] = useState<Messages[]>([
        { id: 1, sender: "bot", text: "Hi! I'm HiteshBot. Ask me anything about web dev, JavaScript, React, or career advice." }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [input, setInput] = useState("");

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    if (input.trim() === "") return;
    const userMessage: Messages = { id: Date.now(), sender: "user", text: input };
    const botResponse: Messages = { id: Date.now() + 1, sender: "bot", text: findUserRes(input) };
    setMessages((prev) => [...prev, userMessage, botResponse]);
    setInput("");
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            <div className={`message-bubble ${msg.sender}`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-wrapper">
        <div className="input-area">
          <input
            type="text"
            value={input}
            placeholder="Type your message..."
            onChange={(e) => setInput(e.target.value)}  
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
          />
          <button onClick={handleSend}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="12 19 12 5"></polyline>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )

}
