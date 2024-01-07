import * as React from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Navbar from './Navbar';
import Profilepage from './Profilepage';
import Aboutpage from './Aboutpage';
import "./App.css";
import Skillpage from './Skillpage';
import Projectpage from './Projectpage';
import Experiencepage from './Experiencepage';
import AcheivementsandResponsibilitypage from './AcheivementsandResponsibilitypage';
import Contactme from './Contactme';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Poppins', 'sans-serif'
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme} >
      <Navbar />
      <Profilepage />
      <Aboutpage />
      <Skillpage/>
      <Projectpage/>
      <Experiencepage/>
      <AcheivementsandResponsibilitypage/>
      <Contactme/>
    </ThemeProvider >
  );
}

export default App;
