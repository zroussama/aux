/** @jsx jsx */
import { jsx, Container, Box, Image } from "theme-ui";

import RealTimeMonitoringImage from "assets/sdba/real-time-monitoring.png";
import AnomalyDetectionImage from "assets/sdba/anomaly-detection.png";
import CustomizableAlertsImage from "assets/sdba/customizable-alerts.png";
import ScalabilityIntegrationImage from "assets/sdba/scalability-integration.png";

const data = [
  {
    title: "Real-Time Monitoring",
    description: "SDBA employs advanced algorithms and machine learning techniques to monitor network traffic, user behavior, and system logs in real-time, enabling early detection of potential data breaches. This continuous monitoring ensures that any anomalies or suspicious activities are identified as soon as they occur, allowing for immediate investigation and response.",
    image: RealTimeMonitoringImage,
    alt: "Real-Time Monitoring",
  },
  {
    title: "Anomaly Detection",
    description: "By establishing baseline patterns of normal behavior, SDBA can identify deviations that may indicate a security threat, such as unusual login attempts, unauthorized access to sensitive data, or suspicious network traffic. This anomaly detection capability is powered by sophisticated machine learning models that learn and adapt to the unique behavior patterns of each organization.",
    image: AnomalyDetectionImage,
    alt: "Anomaly Detection",
  },
  {
    title: "Customizable Alerts",
    description: "Organizations can customize alert thresholds and notification preferences based on their unique security requirements. Whether it's a mobile notification, email alert, or integration with existing security incident response tools, SDBA ensures that stakeholders are promptly informed of potential data breaches.",
    image: CustomizableAlertsImage,
    alt: "Customizable Alerts",
  },
  {
    title: "Scalability and Integration",
    description: "SDBA is designed to seamlessly integrate with existing cybersecurity infrastructure, including SIEM (Security Information and Event Management) systems, firewalls, and endpoint security solutions. Moreover, it can scale to accommodate the evolving needs of organizations as they grow and expand their digital footprint.",
    image: ScalabilityIntegrationImage,
    alt: "Scalability and Integration",
  },
];

export default function SDBA() {
  return (
    <section sx={{ variant: "section.sdba", marginTop: 8 }} id="sdba">
      <Container sx={styles.containerBox}>
        {data.map((item, index) => (
     <Box sx={styles.contentWrapper} key={index}>
     {index % 2 === 0 ? (
       <>
         <Box sx={styles.textBox}>
           <h3>{item.title}</h3>
           <p>{item.description}</p>
         </Box>
         <Box sx={styles.imageBox}>
           <Image src={item.image} alt={item.alt} />
         </Box>
       </>
     ) : (
       <>
         <Box sx={styles.imageBox}>
           <Image src={item.image} alt={item.alt} />
         </Box>
         <Box sx={styles.textBox}>
           <h3>{item.title}</h3>
           <p>{item.description}</p>
         </Box>
       </>
     )}
   </Box>
        ))}
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column", "column", "row"],
    marginBottom: "50px",
    width: "100%",
    maxWidth: "1200px",
    textAlign: ["center", "center", "left"],
  },
  textBox: {
    width: ["100%", "100%", "45%"],
    p: {
      textAlign: "justify",
    },
    mb: ["20px", "20px", 0],
  },
  imageBox: {
    width: ["100%", "100%", "45%"],
    textAlign: "center",
    img: {
      width: "100%",
      height: "auto",
    },
    mb: ["20px", "20px", 0],
  },
};