import React from 'react';
import logo from '../../assets/Images/logo1.png'
import '../../assets/CSS/NavBar.css'
import Avatar from '@mui/material/Avatar';
import SearchBar from './SearchBar';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className="navbar_body">
      <nav className="navbar">
            <div className='logo'>
              <a href='#'><img src={logo} alt="logo" style={{width:'15%',height:'10%',marginTop:'5px',borderRadius:'50%'}}/></a>
            </div>
            
            <div className='searchBar'>
              <SearchBar />
            </div>
            <div className="navbar-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">MyLearning</a></li>
                    <li><a href="#">Rules</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/broken-image.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => ( */}
              <Link to={"/my-project/user/profile"}>

                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
              </Link>
              <Link to="">
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Log Out</Typography>
                </MenuItem>
              </Link>
                
              {/* ))} */}
            </Menu>
          </Box>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavBar;
