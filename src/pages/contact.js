/** @jsx jsx */

import { jsx, Container, Box, Flex, Heading, Text, Input, Textarea, Button } from 'theme-ui';

import Layout from 'components/layout';

// Simple Play icon SVG
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="10 8 16 12 10 16 10 8"></polygon>
  </svg>
);

export default function ContactPage() {

  return (

    <Layout>

      <Container sx={styles.container}>

        <Flex sx={styles.content}>

          {/* Left Column - Text Content */}
          <Box sx={styles.leftColumn}>

            <Heading as="h1" sx={styles.mainHeading}>

              <span>All </span>
              <span sx={{ color: 'primary' }}>Data Breaches</span>
              <br />
              <span>Are Unique.</span>

            </Heading>
            
            <Heading as="h2" sx={styles.subHeading}>
              <span sx={{ color: 'primary' }}>Security<br />Procedures</span>
              <span> Aren't.</span>
            </Heading>
            
            <Text sx={styles.description}>
              With our industry-leading vulnerability assessments and award winning 
              <span sx={{ color: 'primary' }}> SDBA™</span> system, Stagic can help you identify potential 
              data security threats before it is too late. Contact us today for a live 
              assessment of your company's data security protection procedures.
            </Text>
            
            <Flex sx={styles.buttonGroup}>
              <Button sx={styles.contactButton}>Contact Us</Button>
              <Button sx={styles.videoButton}>
                <PlayIcon />
                Watch Video
              </Button>
            </Flex>

          </Box>

          {/* Right Column - Contact Form */}
          <Box sx={styles.rightColumn}>
            <Heading as="h3" sx={styles.formHeading}>Get in Touch</Heading>
            <Box as="form" sx={styles.form}>
              <Input placeholder="Full Name" sx={styles.input} />
              <Input type="email" placeholder="Email Address" sx={styles.input} />
              <Input placeholder="Company" sx={styles.input} />
              <Textarea placeholder="Message" rows={4} sx={styles.input} />
              <Button type="submit" sx={styles.submitButton}>Send Message</Button>
            </Box>
          </Box>

        </Flex>

      </Container>

    </Layout>

  );

}

const styles = {

  container: {

    px: 4,

    py: 6,

    maxWidth: '1200px',

  },

  content: {

    flexDirection: ['column', null, null, 'row'],

    alignItems: 'start',

    justifyContent: 'between',

    gap: 5,

  },

  leftColumn: {

    width: ['100%', null, null, '60%'],

  },

  mainHeading: {

    fontSize: [5, 6, 7],

    fontWeight: 'bold',

    color: 'white',

    mb: 4,

  },

  subHeading: {

    fontSize: [5, 6, 7],

    fontWeight: 'bold',

    mb: 4,

  },

  description: {

    color: 'gray.3',

    fontSize: 3,

    mb: 4,

  },

  buttonGroup: {

    flexWrap: 'wrap',

    gap: 3,

  },

  contactButton: {

    bg: 'white',

    color: 'primary',

    px: 4,

    py: 2,

    fontWeight: 'bold',

    borderRadius: 'full',

    '&:hover': {

      bg: 'rgba(255, 255, 255, 0.9)',

    },

  },

  videoButton: {

    display: 'flex',

    alignItems: 'center',

    gap: 2,

    color: 'white',

    px: 4,

    py: 2,

    fontWeight: 'bold',

    borderRadius: 'full',

    '&:hover': {

      color: 'primary',

    },

  },

  rightColumn: {

    width: ['100%', null, null, '40%'],

    bg: 'rgba(255, 255, 255, 0.1)',

    backdropFilter: 'blur(10px)',

    borderRadius: 'lg',

    p: 4,

  },

  formHeading: {

    fontSize: 4,

    fontWeight: 'bold',

    color: 'white',

    mb: 4,

  },

  form: {

    display: 'flex',

    flexDirection: 'column',

    gap: 3,

  },

  input: {

    bg: 'rgba(255, 255, 255, 0.05)',

    border: '1px solid rgba(255, 255, 255, 0.2)',

    borderRadius: 'default',

    color: 'white',

    '::placeholder': {

      color: 'gray.4',

    },

    '&:focus': {

      borderColor: 'primary',

      outline: 'none',

    },

  },

  submitButton: {

    bg: 'primary',

    color: 'white',

    fontWeight: 'bold',

    '&:hover': {

      bg: 'rgba(59, 89, 152, 0.9)',

    },

  },

};
