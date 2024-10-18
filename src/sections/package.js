/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui";
import PriceCard from "components/price-card";
import SectionHeader from "components/section-header";
import { IoIosArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import PatternBG from "assets/patternBG.png";
import { Link } from 'react-router-dom';

const packages = [
  {
    name: "Free Plan",
    description: "Essential Security for small teams or offices",
    buttonText: "Get Started Now",
    buttonLink: "/get-started",
    points: [
      {
        icon: <FaCheckCircle style={{ color: "white" }} />,
        text: "Basic Security Features",
        isAvailable: true,
      },
      {
        icon: <FaCheckCircle style={{ color: "white" }} />,
        text: "Limited Access to Advanced Features",
        isAvailable: true,
      },
      {
        icon: <FaCheckCircle style={{ color: "white" }} />,
        text: "Community Support Access",
        isAvailable: true,
      },
      {
        icon: <FaCheckCircle style={{ color: "white" }} />,
        text: "Flexible Upgrade Options",
        isAvailable: true,
      },
      {
        icon: <FaCheckCircle style={{ color: "white" }} />,
        text: "Free Security Updates",
        isAvailable: true,
      },
    ],
    button: (
      <a href="/get-started" className="cta-button">
        Get Started Now
      </a>
    ),
  },
  {
    header: "Most Popular",
    name: "SDBA",
    description:
      "Stagic Data Breach Alert with continuous monitoring and support",
    buttonText: "Request Demo",
    buttonLink: "/sdba",
    points: [
      {
        icon: <FaCheckCircle style={{ color: "primary" }} />,
        text: "24/7 Full Spectrum Assistance",
        isAvailable: true,
      },
      {
        icon: <FaCheckCircle style={{ color: "primary" }} />,
        text: "Around-the-Clock Support",
        isAvailable: true,
      },
      {
        icon: <FaCheckCircle style={{ color: "primary" }} />,
        text: "Continuous Monitoring System",
        isAvailable: true,
      },
      {
        icon: <FaCheckCircle style={{ color: "primary" }} />,
        text: "Easy Team Expansion",
        isAvailable: true,
      },
      {
        icon: <FaCheckCircle style={{ color: "primary" }} />,
        text: (
          <a
            href="/sdba"
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Discover SDBA Benefits
          </a>
        ),
        isAvailable: true,
      },
    ],
    button: (
      <a href="/sdba" className="cta-button">
        Request Demo
      </a>
    ),
  },
  {
    name: "Premium",
    description: "Comprehensive Security Suite for startups",
    buttonText: "Get a Quote",
    buttonLink: "/quote",
    points: [
      {
        icon: <FaCheckCircle style={{ color: "white" }} />,
        text: "24/7 Full Spectrum Assistance",
        isAvailable: true,
      },
      {
        icon: <FaCheckCircle style={{ color: "white" }} />,
        text: "Comprehensive Security Suite",
        isAvailable: true,
      },
      {
        icon: <FaCheckCircle style={{ color: "white" }} />,
        text: "Advanced Threat Detection",
        isAvailable: true,
      },
      {
        icon: <FaCheckCircle style={{ color: "white" }} />,
        text: "Fully Customizable Solutions",
        isAvailable: true,
      },
      {
        icon: <FaCheckCircle style={{ color: "white" }} />,
        text: "Enterprise-Level Protection",
        isAvailable: true,
      },
    ],
    button: (
      <a href="/quote" className="cta-button">
        Get a Quote
      </a>
    ),
  },
];

export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="Explore Our Packages"
          slogan="Secure Solutions, Transparent Pricing"
          isWhite={true}
        />
        <Flex
          sx={{
            justifyContent: "center",
            flexWrap: ["wrap", null, null, "nowrap"],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard  data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: "primary",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    py: [8, null, 9, null, null, 10],
    position: "relative",
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      right: 0,
      width: "100%",
      backgroundSize: "350px 350px",
      height: "100%",
      opacity: 0.3,
      zIndex: 0,
    },
  },
  priceCard: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "10px",
    padding: "20px",
    width: "300px",
    textAlign: "center",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  priceCardHeader: {
    fontSize: "1.5em",
    marginBottom: "10px",
  },
  priceCardDescription: {
    fontSize: "1.1em",
    marginBottom: "20px",
  },
  priceCardPointsList: {
    listStyle: "none",
    padding: "0",
    marginBottom: "20px",
  },
  priceCardPointItem: {
    fontSize: "1em",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  priceCardPointIcon: {
    marginRight: "8px",
  },
  ctaButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    display: "inline-block",
    marginTop: "auto", // Ensures button stays at the bottom
    ":hover": {
      backgroundColor: "#0056b3",
    },
  },
  learnMore: {
    fontSize: "0.9em",
    marginTop: "10px",
    a: {
      color: "#007bff",
      textDecoration: "none",
      fontWeight: "bold",
      ":hover": {
        textDecoration: "underline",
      },
    },
  },
};
