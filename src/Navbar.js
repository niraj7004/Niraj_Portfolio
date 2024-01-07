import * as React from 'react';
import { Stack } from '@mui/material';
import {Link} from 'react-scroll'
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

function Navbar() {

    const buttonStyles = {
        fontSize: '15px',
        backgroundColor: 'transparent',
        color: 'black',
        '&:hover': {
          color: 'gray',
          textDecoration: 'underline',
          backgroundColor: 'transparent'
        }
      };
    
      return (
          <AppBar position="static" container={false} sx={{ backgroundColor: 'transparent', boxShadow: 'none', color: 'black', margin: 0 }} >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', paddingY: '1rem' }}>
              <Typography paddingLeft="5rem" variant="h5" component="div" color="inherit">
                Patel Niraj Kumar
              </Typography>
              <Stack direction="row" paddingRight="5rem" spacing={1.5}>
                <Link to="about" spy={true} smooth={true} offset={50} duration={500}><Button sx={buttonStyles} size='large' color="inherit">About Me</Button></Link>
                <Link to="skill" spy={true} smooth={true} offset={-100} duration={500}><Button sx={buttonStyles} size='large' color="inherit">Skills</Button></Link>
                <Link to="project" spy={true} smooth={true} offset={115} duration={500}><Button sx={buttonStyles} size='large' color="inherit">Projects</Button></Link>
                <Link to="experience" spy={true} smooth={true} offset={-100} duration={500}><Button sx={buttonStyles} size='large' color="inherit">Experience</Button></Link>
                <Link to="acheivement" spy={true} smooth={true} offset={50} duration={500}><Button sx={buttonStyles} size='large' color="inherit">Acheivements</Button></Link>
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500}><Button sx={buttonStyles} size='large' color="inherit">Contact Me</Button></Link>
              </Stack>
            </Toolbar >
          </AppBar >
    ); 
}
export default Navbar;