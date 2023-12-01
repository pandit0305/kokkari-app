import { Box } from "@mui/material";
import React from "react";
import logo from "../../assets/images/log.png";
import iconLogo from "../../assets/images/iconLogo.png";
import { styles } from "../../styles/style";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const matches = useMediaQuery('(max-width:800px)');
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            {
                matches ? (    <Stack spacing={2} sx={{ flexGrow: 1 }}>
                    <AppBar position="static" sx={styles.bar}>
                        {appBarLabel()}
                    </AppBar>   
                </Stack>) : (
                        <Box>
                        <Box sx={styles.logo}>
                            <img src={logo} alt="" sx={styles.point} />
                        </Box>
                        <Box sx={styles.menu}>
                            <Box>
                                <Button
                                    sx={styles.btn}
                                    id="fade-button"
                                    aria-haspopup="true"
                                >
                                    About
                                </Button>
                                <Button
                                    sx={styles.btn}
                                    id="fade-button"
                                    aria-haspopup="true"
                                >
                                    Cuisine
                                </Button>
                                <Button
                                    sx={styles.btn}
                                    id="fade-button"
                                    aria-controls={open ? "fade-menu" : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                                    onClick={handleClick}
                                >
                                    Menus
                                </Button>
                                <Button
                                    sx={styles.btn}
                                    id="fade-button"
                                    aria-haspopup="true"
                                >
                                    Reservations
                                </Button>
                                <Button
                                    sx={styles.btn}
                                    id="fade-button"
                                    aria-haspopup="true"
                                >
                                    Private Dining
                                </Button>
                                <Menu
                                    id="fade-menu"
                                    MenuListProps={{
                                        "aria-labelledby": "fade-button",
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                >
                                    <MenuItem onClick={handleClose}>Lunch Menu</MenuItem>
                                    <MenuItem onClick={handleClose}>Dinner Menu</MenuItem>
                                    <MenuItem onClick={handleClose}>Wine List</MenuItem>
                                </Menu>
                            </Box>
                        </Box>
                    </Box>
                )
            }
        </Box>
    );
};

export default Header;

function appBarLabel() {
    return (
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} >
        <img src={iconLogo} alt="" style={styles.mobileLogo} />
        </Box>
        <IconButton edge="start" color="black" aria-label="menu" sx={{ mr: 2, ml:2 }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    );
  }
