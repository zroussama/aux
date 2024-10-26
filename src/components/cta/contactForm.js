/** @jsx jsx */

import { jsx, Label, Input, Textarea, Button, Box } from 'theme-ui';

import { useState } from 'react';



const ContactForm = ({ onSubmit }) => {

  const [formData, setFormData] = useState({

    name: '',

    email: '',

    message: '',

  });

  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });

  };



  const handleSubmit = (e) => {

    e.preventDefault();

    console.log('Form submitted:', formData);

    onSubmit();

  };



  return (

    <Box as="form" onSubmit={handleSubmit} sx={styles.form}>

      <Label htmlFor="name">Name</Label>

      <Input

        name="name"

        id="name"

        mb={3}

        onChange={handleChange}

        value={formData.name}

      />



      <Label htmlFor="email">Email</Label>

      <Input

        type="email"

        name="email"

        id="email"

        mb={3}

        onChange={handleChange}

        value={formData.email}

      />



      <Label htmlFor="message">Message</Label>

      <Textarea

        name="message"

        id="message"

        rows={6}

        mb={3}

        onChange={handleChange}

        value={formData.message}

      />



      <Button type="submit">Send Message</Button>

    </Box>

  );

};



export default ContactForm;



const styles = {

  form: {

    display: 'flex',

    flexDirection: 'column',

  },

};
