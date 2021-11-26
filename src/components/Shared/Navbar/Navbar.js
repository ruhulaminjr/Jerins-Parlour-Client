import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Container, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import logo from "../../../Image_Icon/logo.png";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const { user, LogOut } = useAuth();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <NavLink to="/">Home</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/explore">Explore</NavLink>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        {user.email ? (
          <>
            <Typography sx={{ color: "#222" }}>{user.displayName}</Typography>{" "}
            <br />
            <PrimaryButton sx={{ px: 4, mx: 2 }} onClick={LogOut}>
              Log Out
            </PrimaryButton>{" "}
          </>
        ) : (
          <Link to="/login">
            <PrimaryButton sx={{ px: 4, mx: 2 }}>Login</PrimaryButton>
          </Link>
        )}
      </MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1, py: 2}}>
      <AppBar position="static" sx={{ background: "none", boxShadow: "none" }}>
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Box variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={logo} alt="" width="128" height="48" />
            </Box>
            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              <NavLink
                to="/"
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#474747",
                  margin: "0 10px",
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/"
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#474747",
                  margin: "0 10px",
                }}
              >
                Our Portfolio
              </NavLink>
              <NavLink
                to="/"
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#474747",
                  margin: "0 10px",
                }}
              >
                Our Team
              </NavLink>
              <NavLink
                to="/"
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#474747",
                  margin: "0 10px",
                }}
              >
                Contact Us
              </NavLink>
              {user.email ? (
                <>
                  <Typography sx={{ color: "#222" }}>
                    {user.displayName}
                  </Typography>{" "}
                  <PrimaryButton sx={{ px: 4, mx: 2 }} onClick={LogOut}>
                    Log Out
                  </PrimaryButton>{" "}
                </>
              ) : (
                <Link to="/login">
                  <PrimaryButton sx={{ px: 4, mx: 2 }}>Login</PrimaryButton>
                </Link>
              )}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon sx={{ color: "#222" }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
};

export default Navbar;
