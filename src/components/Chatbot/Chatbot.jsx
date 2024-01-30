import { useState } from "react";
import axios from "axios";
import styles from "./Chatbot.module.css";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const chatWithGPT3 = async (userInput) => {
    const apiEndpoint =
      "https://api.openai.com/v1/chat/completions/";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
    };

    const data = {
      prompt: userInput,
      max_tokens: 150,
    };
    try {
      const response = await axios.post(apiEndpoint, data, { headers });
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error("Error communicating with the API:", error.message);
      return "";
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { text: input, user: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    const aiMessage = { text: "...", user: false };
    setMessages((prevMessages) => [...prevMessages, aiMessage]);
    const response = await chatWithGPT3(input);
    const newAiMessage = { text: response, user: false };
    setMessages((prevMessages) => [...prevMessages.slice(0, -1), newAiMessage]);
    setInput("");
  };
  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.chatbotMessages}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${
                message.user ? styles.userMessage : styles.aiMessage
              }`}
              
          >
            {message.text}
          </div>
        ))}
      </div>
      <form className={styles.chatbotInputForm} onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default Chatbot;
