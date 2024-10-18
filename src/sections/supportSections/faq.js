import React from "react";
import { Box, Container, Flex, Text, Heading, Button } from "theme-ui";
import BlockTitle from "components/block-title";
import Accordion from "components/accordion/accordion";

const accordionData = [
  {
    isExpanded: false,
    title: "What is social engineering, and how can it benefit my business?",
    contents: (
      <div>
        Social engineering involves understanding and influencing human behavior
        to enhance security. Our services focus on educating your team to
        recognize and prevent social engineering attacks, ultimately
        safeguarding your organization's data and assets.
      </div>
    ),
  },
  {
    isExpanded: true,
    title:
      "How does your data security service ensure the safety of our sensitive information?",
    contents: (
      <div>
        We employ advanced encryption, multi-factor authentication, and regular
        security audits to protect your data. Our comprehensive approach ensures
        the confidentiality, integrity, and availability of your information,
        mitigating potential risks effectively.
      </div>
    ),
  },
  {
    isExpanded: false,
    title:
      "What is the process for optimizing customer support, and how can it improve our business operations?",
    contents: (
      <div>
        Our subscription model offers two tiers. The free subscription provides
        basic access to our resources, while the premium subscription offers
        personalized services. To get a quote, contact us, and we'll tailor a
        plan based on your specific needs, ensuring you receive optimal value.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Can I cancel my subscription, and is there a refund policy?",
    contents: (
      <div>
        Yes, you can cancel your subscription at any time. We understand
        business needs may change. For our paid subscription, we offer a
        flexible refund policy within the first 30 days. Contact our support
        team for assistance with cancellations or refund requests.
      </div>
    ),
  },
  {
    isExpanded: false,
    title:
      "How does the subscription model work, and what do I get with a paid subscription?",
    contents: (
      <div>
        Our subscription model offers two tiers. The free subscription provides
        basic access to our resources, while the premium subscription offers
        personalized services. To get a quote, contact us, and we'll tailor a
        plan based on your specific needs, ensuring you receive optimal value.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section" sx={{ marginTop: 8 }} id="support">
      <Container>
        <BlockTitle
          title="Frequently Asked Questions"
          text="Send us an email"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Do you have any quesiton? Please ask here, we are ready to support
            </Heading>
            <Text as="p">
              If your question is not listed here, please feel free to reach out to us.
            </Text>
            <Button
              variant="primary"
              aria-label="Ask your Question"
              sx={{ marginTop: 4 }}
            >
              Ask your Question
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {
    flexWrap: "wrap",
    flexDirection: ["column", null, null, null, null, "row-reverse"],
    pb: ["70px", null, null, null, "90px", null, "130px"],
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 33.333%"],
    maxWidth: ["100%", null, null, "450px", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["0px", null, null, null, "0"],
    textAlign: ["center", null, null, null, null, "left"],
    mt: ["40px", null, null, null, null, "0"],
    h3: {
      fontSize: ["23px", null, null, null, "24px"],
      lineHeight: [1.5, null, null, null, 1.67],
      color: "black",
      fontWeight: 700,
      letterSpacing: "-1.5px",
      mt: "-5px",
      pr: ["0", null, null, null, null, "30px"],
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.87,
      color: "#343D48",
      opacity: 0.7,
      mt: "10px",
      pr: ["0", null, null, null, null, "80px"],
    },
  },
  askButton: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "#02073E",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    letterSpacing: "-0.16px",
    mt: "25px",
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ["0 0 100%", null, null, null, "0 0 66.666%"],
  },
};
