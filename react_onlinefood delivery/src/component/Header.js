import React from 'react';
import { Box, AppBar, Toolbar, Typography,IconButton ,Drawer,Divider} from '@mui/material';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { Link } from 'react-router-dom';
import '../styles/HeaderStyle.css'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Homeimage from '../images/Headerimage.png';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

import Menu from '../pages/Menu';
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={Homeimage} alt="onlineimage" height={"90"} width="90" />
      </Typography>
     <Divider/>
      <ul className="mobile-navigation">
        <li>
          <Link activeClassName="active" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: 'orange' }}>
          <Toolbar>
         <IconButton color='inherit' 
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }} onClick={handleDrawerToggle}>
            <MenuIcon sx={{ fontSize: '2rem'}}></MenuIcon>
            </IconButton>
            <DeliveryDiningIcon sx={{ fontSize: '3rem', marginRight: '0.5rem' }} />
            <Typography
              color={"white"}
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Online Food
            </Typography>
         
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ul className="navigation-menu" >
               
              <li style={{ marginRight: '1rem' }}>
                <Link activeClassName="active" to="/">Home</Link>
              </li>
              <li style={{ marginRight: '1rem' }}>
                <Link activeClassName="active" to="/about">About</Link>
              </li>
              <li style={{ marginRight: '1rem' }}>
                <Link activeClassName="active" to="/contact">Contact</Link>
              </li>
              <li style={{ marginRight: '1rem' }}>
                <Link activeClassName="active" to="/menu">Menu</Link>
              </li>
            </ul>
          </Box>
          </Toolbar>
          
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;