/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Flex, Box, Heading, Text, Image, Button } from "theme-ui";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
// import { Link } from "components/link";
import { FaPlayCircle } from "react-icons/fa";
import BannerBG from "assets/bannerBg.png";
import BannerThumb from "assets/banner-thumb.png";
import TextFeature from "components/text-feature";
import client1 from "assets/sponsor/paypal.svg";
import client2 from "assets/sponsor/google.svg";
import client3 from "assets/sponsor/dropbox.svg";

const data = [
  {
    id: 1,
    path: "#",
    image: client1,
    title: "paypal",
  },
  {
    id: 2,
    path: "#",
    image: client2,
    title: "google",
  },
  {
    id: 3,
    path: "#",
    image: client3,
    title: "dropbox",
  },
];

export default function MissionSection() {
  return (
    <section sx={{ ...styles.banner, marginBottom: 8 }} id="mission">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading
            as="h2"
            variant="heroPrimary"
            style={styles.banner.contentBox.textElements}
          >
            Our Mission
          </Heading>
          <Text
            as="p"
            variant="heroSecondary"
            style={styles.banner.contentBox.textElements}
          >
            At Stagic, our mission is to empower businesses by optimizing
            customer support, securing data, and enhancing overall strategic
            initiatives. We are committed to providing cutting-edge solutions
            that not only meet but exceed the evolving needs of our clients.
            Through innovation and a relentless pursuit of excellence, we strive
            to be the driving force behind our clients' success, ensuring they
            navigate the digital landscape with confidence and achieve their
            strategic goals.
          </Text>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  color: "#2F5392",
  banner: {
    overflow: ["hidden", "initial", null, "hidden"],
    background:
      "linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)",
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "top left",
    backgroundSize: "cover",
    pt: ["120px", null, null, null, null, null, "110px", "100px"],
    pb: ["70px", null, null, "80px", null, 10, "120px"],
    backgroundColor: "primary",
    container: {
      display: "flex",
    },
    contentBox: {
      width: ["100%"],
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
      textElements: {
        textAlign: "center",
      },
    },
  },
  sponsorTitle: {
    color: "white",
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  sponsorBox: {
    pt: ["35px", null, null, null, null, "45px"],
    flexDirection: ["column", null, "row"],
    sponsor: {
      display: "flex",
      alignItems: "center",
      "> a": {
        mr: [5, null, null, 4, 6],
        display: "flex",
        "&:last-of-type": {
          mr: 0,
        },
      },
    },
  },
};
