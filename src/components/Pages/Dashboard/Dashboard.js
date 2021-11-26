import {
  AppBar,
  Button,
  CssBaseline,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../Image_Icon/logo.png";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AddIcon from "@mui/icons-material/Add";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

import { Box } from "@mui/system";
import React from "react";
import { Route, Routes, useLocation } from "react-router";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import AddService from "./Admin/AddService/AddService";
import MakeAdmin from "./Admin/MakeAdmin/MakeAdmin";
import Orderlist from "./Admin/OrdersList/Orderlist";
import ManageServices from "./Admin/ManageService/ManageServices";
import { Link, NavLink } from "react-router-dom";
const drawerWidth = 240;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const match = useLocation;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const linkstyle = {
    color: "#878787",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: " capitalize",
    gap: "10px",
    padding: "10px 0",
    fontWeight: "bold",
    fontSize: "16px",
    "&:hover": {
      color: "#F63E7B",
    },
  };
  const Activelinkstyle = {
    color: "#F63E7B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: " capitalize",
    gap: "10px",
    padding: "10px 0",
    fontWeight: "bold",
    fontSize: "16px",
    "&:hover": {
      color: "#F63E7B",
    },
  };

  const drawer = (
    <Grid item xs={12}>
      <Box sx={{ my: 3, px: 3 }}>
        <img src={logo} alt="logo" width="125" />
      </Box>
      <List>
        <ListItem>
          <NavLink
            to="orderlist"
            style={({ isActive }) => (isActive ? Activelinkstyle : linkstyle)}
          >
            <LocalMallOutlinedIcon /> Orders List
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="addservice"
            style={({ isActive }) => (isActive ? Activelinkstyle : linkstyle)}
          >
            <AddIcon /> Add Service
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="makeadmin"
            style={({ isActive }) => (isActive ? Activelinkstyle : linkstyle)}
          >
            <AddModeratorIcon /> Make Admin
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="manageservice" style={({isActive})=> isActive ? Activelinkstyle : linkstyle}>
            <AppRegistrationIcon /> Manage Services
          </NavLink>
        </ListItem>
      </List>
    </Grid>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#fff",
          boxShadow:"none"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#222" }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "#222" }}
          >
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 5,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Routes>
          <Route
            path="addservice"
            element={
              <PrivateRoute>
                <AddService />
              </PrivateRoute>
            }
          />
          <Route
            path="makeadmin"
            element={
              <PrivateRoute>
                <MakeAdmin />
              </PrivateRoute>
            }
          />
          <Route
            path="orderlist"
            element={
              <PrivateRoute>
                <Orderlist />
              </PrivateRoute>
            }
          />
          <Route
            path="manageservice"
            element={
              <PrivateRoute>
                <ManageServices />
              </PrivateRoute>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};

export default Dashboard;
