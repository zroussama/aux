/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Flex, Box, Heading, Text, Button } from "theme-ui";
import { Link } from "react-scroll";
import ModalVideo from "react-modal-video";
import {FaPlayCircle} from "react-icons/fa";
import {useEffect, useState} from "react";

export default function Banner() {
    const [videoOpen, setVideoOpen] = useState(false);

    useEffect(() => {
        setVideoOpen(true);
    }, []);
    const handleClick = (e) => {
        e.preventDefault();
        setVideoOpen(true);
    };
    return (
        <section sx={styles.banner} id="service">
            <Container sx={styles.banner.container}>
                <Box sx={styles.banner.contentBox}>
                    <Heading
                        as="h1"
                        variant="heroPrimary"
                        style={styles.banner.contentBox.textElements}
                    >
                         WHAT IS SDBA
                    </Heading>
                    <Flex>
                        <>
                            <ModalVideo
                                channel="vimeo"
                                isOpen={videoOpen}
                                videoId="945297481"
                                onClose={() => setVideoOpen(false)}
                            />
                            <Button
                                variant="textButton"
                                aria-label="Watch Video"
                                onClick={handleClick}
                            >
                                <FaPlayCircle /> Watch Video
                            </Button>
                        </>
                    </Flex>
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
        pt: ["150px", null, null, null, null, null, "140px", "130px"],
        pb: ["100px", null, null, "110px", null, 10, "150px"],
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
                textAlign: [
                    "left",
                    "center",
                    "center",
                    "center",
                    "center",
                    "center",
                    "center",
                ],
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
