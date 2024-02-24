import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import '../../../assets/CSS/NavBar.css'

const NavTwo = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div>
      <ul>
                    <li><a href="#"><Link to={"/my-project/user/home"}>Home</Link></a></li>
                    <li><a href="#"><Link to={"/my-project/user/academy"}>Institutions</Link></a></li>
                    <li><a href="#"><Link to={"/my-project/user/rules"}>Rules</Link></a></li>
                    <li><a href="#"><Link to={"/my-project/user/about"}>About</Link></a></li>
                    <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/broken-image.jpg" className='avatar'/>
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
              <Link to={"/my-project/user/profile"}>

                <MenuItem onClick={handleCloseUserMenu} >
                  <Typography textAlign="center" style={{color:'black',fontSize:'18px',fontWeight:'500',fontFamily:'"Kode Mono", monospace'}}>Profile</Typography>
                </MenuItem>
              </Link>
              <Link to={"/my-project/login"}>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" style={{color:'black',fontSize:'18px',fontWeight:'500',fontFamily:'"Kode Mono", monospace'}}>LogOut</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
                </ul>
    </div>
  )
}

export default NavTwo
