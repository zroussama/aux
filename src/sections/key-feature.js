/** @jsx jsx */
import { Button, jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import stagicBlack from "assets/key-feature/StagicBlack-bg.png";
import stagicBleu from "assets/key-feature/stagicBleu-bg.png";
import stagicRed from "assets/key-feature/stagicRed-bg.png";
import stagicWhite from "assets/key-feature/Stagicwhite-bg.png";
import { useState } from "react";

const data = [
  {
    id: 1,
    imgSrc: stagicBleu,
    altText: "Stagic Bleu",
    title: "Stagic Bleu",
    text: "Stagic Blue focuses on procedure optimization, process improvement, and operational efficiency. By analyzing workflows, identifying bottlenecks, and implementing targeted interventions, it helps clients streamline operations, reduce costs, and enhance overall productivity.",
  },
  {
    id: 2,
    imgSrc: stagicWhite,
    altText: "Stagic Green",
    title: "Stagic Green",
    text: "Stagic Green is dedicated to sustainable practices and environmental responsibility. It aids clients in implementing eco-friendly solutions, optimizing resource usage, and reducing environmental impact, thus promoting long-term sustainability.",
  },
  {
    id: 3,
    imgSrc: stagicRed,
    altText: "Stagic Red",
    title: "Stagic Red",
    text: "Stagic Red specializes in risk management and security. It provides comprehensive assessments, monitoring, and incident response strategies to protect clients’ assets, ensuring robust security measures and minimizing potential risks.",
  },
  {
    id: 4,
    imgSrc: stagicBlack,
    altText: "Stagic Yellow",
    title: "Stagic Yellow",
    text: "Stagic Yellow focuses on innovation and technological advancement. It supports clients in adopting cutting-edge technologies, enhancing digital transformation, and fostering innovation to stay competitive in the market.",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="Secure Your Data with Advanced Data Security Consulting"
          title="Explore Our Services"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
              sx={{
                ...styles.card,
                ...(item.imgSrc === stagicWhite
                  ? styles.card.darkBackground
                  : {}),
              }}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, "40px", null, "80px"],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ["35px 0", null, "40px 0"],
    gridTemplateColumns: ["1fr", "1fr 1fr"], // 1 column on small screens, 2 columns on larger screens
    width: ["100%", "80%", "100%"],
    mx: "auto",
    "& > div": {
      px: [0, "20px", null, "30px", null, "40px", "50px", "60px"],
    },
  },
  card: {
    title: {
      fontSize: ["18px", "20px", "24px"], // Increase font size for title
      fontWeight: "bold",
      mb: "15px",
    },
    text: {
      fontSize: ["14px", "16px", "18px"], // Increase font size for text
      lineHeight: 1.5,
    },
    img: {
      width: ["100px", "120px", "140px"], // Increase image size
      height: "auto",
      mb: "20px",
    },
    darkBackground: {
      backgroundColor: "#0cf", // or any dark color you prefer
      color: "#fff", // ensure text is readable on dark background
    },
  },
};
