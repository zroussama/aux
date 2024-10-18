/** @jsx jsx */
import { jsx, Container, Box, Heading, Text, Input, Textarea, Button } from "theme-ui";

export default function ContactUs() {
  return (
    <section sx={{ variant: "section.contact" }}>
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
    </section>
  );
}

const styles = {
  contentBox: {
    textAlign: "center",
    mx: "auto",
    maxWidth: "650px",
    pt: ["100px", "120px"],
    pb: ["80px", "100px"],
  },
  heading: {
    fontSize: ["24px", "30px"],
    fontWeight: "bold",
    mb: "20px",
  },
  text: {
    fontSize: ["16px", "18px"],
    mb: "40px",
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