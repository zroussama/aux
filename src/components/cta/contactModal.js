/** @jsx jsx */
import { jsx, Container, Box, Heading, Text, Input, Textarea, Button, Close } from "theme-ui";
import { useState } from "react";

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div sx={styles.overlay} onClick={handleOverlayClick}>
      <div sx={styles.modal}>
        <Close sx={styles.closeButton} onClick={onClose} />
        <Container>
          <Box sx={styles.contentBox}>
            <Heading as="h1" sx={styles.heading}>
              Contact Us
            </Heading>
            <Text as="p" sx={styles.text}>
              We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </Text>
            <Box as="form" sx={styles.form}>
              <Input placeholder="Your Name" sx={styles.input} />
              <Input placeholder="Your Email" sx={styles.input} />
              <Textarea placeholder="Your Message" sx={styles.textarea} />
              <Button type="submit" sx={styles.button}>
                Send Message
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "flex center",
    zIndex: 1000, // Make sure it's high enough to cover other elements

    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    maxWidth: "500px",
    width: "100%",
    padding: "20px",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
  },
  contentBox: {
    textAlign: "center",
    mx: "auto",
    maxWidth: "650px",
    pt: ["20px", "20px"],
    pb: ["20px", "20px"],
  },
  heading: {
    fontSize: ["24px", "30px"],
    fontWeight: "bold",
    mb: "20px",
  },
  text: {
    fontSize: ["16px", "18px"],
    mb: "20px",
  },
  form: {
    display: "grid",
    gridGap: "20px",
  },
  input: {
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  textarea: {
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    minHeight: "150px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "5px",
    backgroundColor: "primary",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "secondary",
    },
  },
};
