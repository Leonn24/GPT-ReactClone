import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Container, Typography, TextField, Button, Link } from "@mui/material";
import { GENERATE_RESPONSE } from "../utils/mutation";

const ChatBox = () => {
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [message, setMessage] = useState("");
  const [generateResponse] = useMutation(GENERATE_RESPONSE);

  const handleMessageSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await generateResponse({
        variables: { inputText: message },
      });
      const response = data.generateResponse.answer;
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, isUser: true },
        { text: response, isUser: false },
      ]);
      setMessage("");
    } catch (error) {
      console.error("Error generating response:", error);
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <Container
      component="main"
      maxWidth="sm"
      style={{
        marginTop: "8rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5" align="center">
        Chat with ChatGPT
      </Typography>
      <div>
        {/* Render chat messages */}
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.isUser ? "user-message" : "response-message"}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form
        onSubmit={handleMessageSubmit}
        style={{ width: "100%", marginTop: "1rem" }}
      >
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="message"
          label="Your Message"
          name="message"
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={handleMessageChange}
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: "1rem" }}
        >
          Send
        </Button>
      </form>
    </Container>
  );
};

export default ChatBox;