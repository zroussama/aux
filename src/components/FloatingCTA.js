/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import Button from './button';
import { useEffect, useState, useRef } from 'react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    if (isVisible && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      <Button ref={buttonRef}>Get Started</Button>
    </Box>
  );
}
