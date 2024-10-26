/** @jsx jsx */

import { jsx, useThemeUI } from 'theme-ui';

import { logEvent } from '../analytics';

import { useRef } from 'react';







export default function Button({ children, variant = 'primary', ...props }) {



  const buttonRef = useRef(null);



  const context = useThemeUI();



  const theme = context.theme || {};











  const handleClick = () => {



    logEvent('CTA', `${variant} button clicked`);



    if (props.onClick) {



      props.onClick();



    }



  };







  const handleKeyDown = (event) => {



    if (event.key === 'Enter' || event.key === ' ') {



      event.preventDefault();



      handleClick();



    }



  };







  return (



    <button



      {...props}



      ref={buttonRef}



      sx={{



        variant: `buttons.${variant}`,



        '&:focus': {



          outline: 'none',



          boxShadow: `0 0 0 3px ${theme.colors?.primary || '#041930'}`,



        },



      }}



      onClick={handleClick}



      onKeyDown={handleKeyDown}



    >



      {children}



    </button>



  );



}






