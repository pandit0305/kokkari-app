import React from "react";
import { Box } from "@mui/material";
import logo from "../../assets/images/log.png";
import iconLogo from "../../assets/images/iconLogo.png";
import { styles } from "../../styles/style";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import lunchPdf from "../../assets/docs/kokkari-lunch-menu-2.pdf";

const items = [
  {
    id: 0,
    label: "ABOUT",
  },
  {
    id: 1,
    label: "CUISINE",
  },
  {
    id: 2,
    label: "MENUS",
  },
  {
    id: 3,
    label: " - LUNCH MENU",
    doc: lunchPdf,
  },
  {
    id: 4,
    label: " - DINNER MENU",
  },
  {
    id: 5,
    label: " - WINE LIST",
  },
  {
    id: 6,
    label: "RESERVATIONS",
  },
  {
    id: 7,
    label: "PRIVATE DINING",
  },
];

const Header = () => {
  const [show, setShow] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const matches = useMediaQuery("(max-width:800px)");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onMenuClick = () => {
    setShow(true);
  };
  const onClearClick = () => {
    setShow(false);
  };
  return (
    <Box sx={{ width: "100%" }}>
      {matches ? (
        <Stack sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={styles.bar} elevation={0}>
            <Toolbar>
              <Box sx={{ flexGrow: 1 }}>
                <img src={iconLogo} alt="" style={styles.mobileLogo} />
              </Box>
              {show && matches ? (
                <IconButton
                  onClick={onClearClick}
                  edge="start"
                  color="black"
                  aria-label="menu"
                  sx={{ ml: 2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
                </IconButton>
              ) : (
                <IconButton
                  onClick={onMenuClick}
                  edge="start"
                  color="black"
                  aria-label="menu"
                  sx={{ ml: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </AppBar>
        </Stack>
      ) : (
        <Box>
          <Box sx={styles.logo}>
            <img src={logo} alt="" sx={styles.point} />
          </Box>
          <Box sx={styles.menu}>
            <Box>
              <Button sx={styles.btn} id="fade-button" aria-haspopup="true">
                About
              </Button>
              <Button sx={styles.btn} id="fade-button" aria-haspopup="true">
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
              <Button sx={styles.btn} id="fade-button" aria-haspopup="true">
                Reservations
              </Button>
              <Button sx={styles.btn} id="fade-button" aria-haspopup="true">
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
                <MenuItem onClick={handleClose}>
                  <a
                    className="link"
                    rel="noreferrer"
                    download={true}
                    target={"_blank"}
                    href={lunchPdf}
                  >
                    Lunch Menu
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a
                    className="link"
                    rel="noreferrer"
                    download={true}
                    target={"_blank"}
                    href={lunchPdf}
                  >
                    Dinner Menu
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a
                    className="link"
                    rel="noreferrer"
                    download={true}
                    target={"_blank"}
                    href={lunchPdf}
                  >
                    Wine List
                  </a>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Box>
      )}

      {show && matches ? (
        <Box>
          <List>
            <Box sx={{ backgroundColor: "#2e1810" }}>
              {items.map((res) => (
                <Box key={res.id}>
                  <ListItem disablePadding>
                    <ListItemButton
                      component="a"
                      rel="noreferrer"
                      download={true}
                      target={"_blank"}
                      href={res.doc}
                      sx={{ backgroundColor: "#6d4412" }}
                    >
                      <ListItemText
                        primary={
                          <React.Fragment>
                            <Typography
                              sx={{ fontSize: "10px", color: "white", ml: 2 }}
                              variant="p"
                            >
                              {res.label}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                  {res.id !== 7 ? <Divider color="white" /> : ""}
                </Box>
              ))}
            </Box>
          </List>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default Header;
