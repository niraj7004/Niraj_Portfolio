import * as React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-scroll'
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar position="static" container={false} sx={{ backgroundColor: 'transparent', boxShadow: 'none', color: 'black', margin: 0 }} >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', paddingY: '1rem' }}>
        <Typography paddingLeft="3rem" variant="h5" component="div" color="inherit" >
          Patel Niraj Kumar
        </Typography>
        <Stack direction="row" paddingRight="5rem" spacing={1.5} sx={{ display: {xs:'none', sm:'none', md: 'none', lg:'flex', xl:'flex' } }}>
          <Link to="about" spy={true} smooth={true} offset={0} duration={500}><Button sx={buttonStyles} size='large' color="inherit">About Me</Button></Link>
          <Link to="skill" spy={true} smooth={true} offset={-30} duration={500}><Button sx={buttonStyles} size='large' color="inherit">Skills</Button></Link>
          <Link to="project" spy={true} smooth={true} offset={50} duration={500}><Button sx={buttonStyles} size='large' color="inherit">Projects</Button></Link>
          <Link to="experience" spy={true} smooth={true} offset={-50} duration={500}><Button sx={buttonStyles} size='large' color="inherit">Experience</Button></Link>
          <Link to="acheivement" spy={true} smooth={true} offset={0} duration={500}><Button sx={buttonStyles} size='large' color="inherit">Acheivements</Button></Link>
          <Link to="contact" spy={true} smooth={true} offset={50} duration={500}><Button sx={buttonStyles} size='large' color="inherit">Contact Me</Button></Link>
        </Stack>
        <Stack sx={{ display: {xs:'flex', sm:'flex', md: 'flex', lg:'none', xl:'none' } }}>
          <MenuIcon 
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick} />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <Link to="about" spy={true} smooth={true} offset={0} duration={500}><MenuItem onClick={handleClose}><Button sx={buttonStyles} size='large' color="inherit">About Me</Button></MenuItem></Link>
            <Link to="skill" spy={true} smooth={true} offset={0} duration={500}><MenuItem onClick={handleClose}><Button sx={buttonStyles} size='large' color="inherit">Skills</Button></MenuItem></Link>
            <Link to="project" spy={true} smooth={true} offset={50} duration={500}><MenuItem onClick={handleClose}><Button sx={buttonStyles} size='large' color="inherit">Projects</Button></MenuItem></Link>
            <Link to="experience" spy={true} smooth={true} offset={-50} duration={500}><MenuItem onClick={handleClose}><Button sx={buttonStyles} size='large' color="inherit">Experience</Button></MenuItem></Link>
            <Link to="acheivement" spy={true} smooth={true} offset={0} duration={500}><MenuItem onClick={handleClose}><Button sx={buttonStyles} size='large' color="inherit">Acheivements</Button></MenuItem></Link>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}><MenuItem onClick={handleClose}><Button sx={buttonStyles} size='large' color="inherit">Contact Me</Button></MenuItem></Link>
          </Menu>
        </Stack>
      </Toolbar >
    </AppBar >
  );
}
export default Navbar;