import React from "react";
import "./Navbar.css";
import { Button, Grid, List, ListItem, Typography } from "@mui/material";
import { Divider } from "@mui/material";

import logo from "../../assets/logo.webp";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <Grid className="navbar-outer-container">
      <Grid className="navbar-container">
        <Grid className="logo-container" flex>
          <img src={logo} alt="logo" />
        </Grid>

        <Grid sx={{ flexGrow: 1 }} />
        <List className="nav-section">
          <Link to="/#top">
            <ListItem>Home</ListItem>
          </Link>
          <Link to="/#about-us">
            <ListItem>About us</ListItem>
          </Link>
          <Link to="/#assess">
            <ListItem>Assess</ListItem>
          </Link>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "rgba(3,2,2,.2)!important" }}
          />
        </List>
        <Link to="/#footer">
          <Typography className="contact blue-button" sx={{ ml: 4 }}>
            Contact
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Navbar;
