/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui";
import { keyframes } from "@emotion/core";
import { useRouter } from "next/router";
import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "components/logo";
import LogoDark from "assets/stagic_dark.png";
import LogoWhite from "assets/stagic.png";
import { DrawerProvider } from "../../contexts/drawer/drawer.provider";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
import ContactModal from "../cta/contactModal";
import Button from 'components/button';

export default function Header({ className }) {
  const router = useRouter();
  const routeName = router.route;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactUsClick = () => {
    router.push('/contact');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={className === "sticky" ? LogoDark : LogoWhite} />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.filter(item => item.ref === routeName).map(({ path, label, }, i) => (
              <Link
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
              {label}
              </Link>
            ))}
          </Flex>

          <Button
            className="donate__btn"
            variant="secondary"
            aria-label="Contact Us"
            onClick={handleContactUsClick}
          >
            Contact Us
          </Button>

          <MobileDrawer />
        </Container>
      </header>
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "white",
    fontWeight: "normal",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.5s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
      ".donate__btn": {
        borderColor: "primary",
        color: "primary",
        "&:hover": {
          boxShadow: "rgba(31, 62, 118, 0.57) 0px 9px 20px -5px",
          backgroundColor: "primary",
          color: "white",
        },
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: "16px",
      fontWeight: "400",
      px: 25,
      cursor: "pointer",
      lineHeight: "1.2",
      "&.active": {
        color: "secondary",
      },
    },
  },
};
