/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import {Avatar, IconButton, Button, AppBar, Toolbar, MenuItem, Menu, Typography, makeStyles} from '@material-ui/core';
// import MoreIcon from '@material-ui/icons/MoreVert';
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../Shared/images/logo.png";


const useStyles = makeStyles((theme) => ({
  root: {
    height: 70,
    fontFamily: "'Segoe UI','Segoe UI Emoji','Segoe UI Symbol'",
    color: 'rgb(51, 51, 51)'
  },
  grow: {
    flexGrow: 1,
  },
  appbar: {
    height: 60,
    border:"none",
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  options:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    listStylePosition:'outside',
    listStyleImage:'none',
    listStyleType:'none',
  },
  link:{
    fontSize:'18px',
    fontWeight:'700',
    textDecoration :'none',
    color:'inherit' 
  },
  padding:{
    padding: '40px',
  },
  logo: {
    marginRight:'10px',
    width:'40',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <Typography variant="body1" align='center'>
          Characters
        </Typography>   
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Typography variant="body1" align='center'>
          Episodes
        </Typography> 
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Typography variant="body1" align='center'>
          Location
        </Typography> 
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <a href="#"><Avatar alt="logo" src={logo} className={classes.logo} /></a>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
              <ul className={classes.options}>
                <li><a className={classes.link} href="#">Characters</a></li>
                <li><a className={`${classes.link} ${classes.padding}`}href="#">Episodes</a></li>
                <li>
                   <Button size='small' variant="outlined">
                     <a className={classes.link} href="#">ABOUT</a>
                   </Button>
                </li>
              </ul>  
          </div>
            
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="menu"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
            <MenuIcon />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
