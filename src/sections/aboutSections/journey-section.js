/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";

import Map from "assets/map.png";

const data = {
  subTitle: "Our Journey",
  description: (
    <>
      Stagic's journey began in Denmark, where our founders recognized the
      critical need for robust data security solutions. With a commitment to
      Danish values of transparency, innovation, and trust, we embarked on a
      mission to redefine the landscape of digital security. <br />
      <br />
      Since our inception, Stagic has blended Danish ingenuity with global
      expertise, setting new standards for data protection. Our team's
      dedication has enabled us to create cutting-edge solutions that go beyond
      compliance, instilling confidence in businesses worldwide. <br />
    </>
  ),
};

export default function JourneySection() {
  return (
    <section sx={{ variant: "section.partner", marginTop: 8 }} id="journey">
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
          />
        </Box>
        <Box sx={styles.imageBox}>
          <Image src={Map} alt="Map" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", 450, 550, "350px", "410px", "485px"],
    mx: "auto",
    pb: ["30px", null, null, 0],
    ".description": {
      pr: [0, null, null, null, 4],
    },
  },
  imageBox: {
    px: [0, null, "40px", 0],
  },
};
