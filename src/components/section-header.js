import React from 'react';
import {Box, Text, Heading, jsx} from 'theme-ui';
import {Link} from "./link";

export default function SectionHeader({ title, slogan, isWhite }) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <Text
        as="p"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? 'white' : 'heading',
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan}
      </Text>
      <Heading
        as="h2"
        sx={{
          variant: 'sectionHeader.title',
          color: isWhite ? 'white' : 'heading_secondary',
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
