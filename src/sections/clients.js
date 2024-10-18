/** @jsx jsx */
import { jsx, Box, Container, Image, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import logo1 from "assets/logo1.png";
import logo2 from "../assets/HCL-logo.png";
import logo3 from "assets/logo3.png";

const clients = [
  {
    id: 1,
    name: "Client",
    logo: logo1,
  },
  {
    id: 2,
    name: "Client",
    logo: logo3,
  },
  {
    id: 3,
    name: "Client",
    logo: logo2,
  },
];

const Clients = () => {
  return (
    <Box id="clients" as="section" sx={styles.section}>
      <Container>
        <SectionHeader
          slogan="Our Clients"
          title="Meet our satisfied clients"
        />
        <Grid sx={styles.grid}>
          {clients?.map((client) => (
            <Box
              key={client.id}
              as="figure"
              sx={client.id === 1 ? styles.largeLogo : styles.logo}
            >
              <Image loading="lazy" src={client.logo} alt={client.name} />
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Clients;

const styles = {

  section: {
    pt: [50, 50, 50, 70, 60, 80],
    pb: [30, 40, 50, 60, 50, 80],
    mt: 0,
    mb: 5,
  },
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
  clients: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    pt: [0, 0, 25, 25, 25, 6],
    "&.slick-slider": {
      marginBottom: "40px",
    },
    ".slick-track": {
      display: "flex",
      alignItems: "center",
    },
  },
  logo: {
    display: "flex !important",
    justifyContent: "bottom center",
    animation:"moveRight 2s linear infinite",
    width: "auto",
    height: "160px",
    mx: "10px",
    ":focus": {
      outline: "none",
    },
  },
  largeLogo: {
    animation:"moveRight 2s linear infinite",

    display: "flex !important",
    justifyContent: "top center",
    marginBottom:"20px",
    width: "auto",
    height: "250px", // Adjust the height as needed
    mx: "10px",
    ":focus": {
      outline: "none",
    },
  },
  pagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  paginationButton: {
    minHeight: "30px",
    padding: 0,
    position: "absolute",
    bottom: "-60px",
    ":focus": {
      outline: "0 none",
    },
    svg: {
      transition: "all 0.2s ease-in-out 0s",
    },
    "&.slick-disabled": {
      color: "#BBC7D7",
      svg: {
        transform: "scale(0.8)",
      },
    },
    "&.slick-prev": {
      left: "calc(50% - 16px)",
      transform: "translateX(-50%)",
    },
    "&.slick-next": {
      transform: "translateX(50%)",
      right: "calc(50% - 16px)",
    },
  },
};

