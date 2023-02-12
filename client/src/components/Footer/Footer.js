import React from "react";
import { Grid, Typography } from "@mui/material";
import "./Footer.css";
import logo from "../../assets/logo.webp";

const Footer = () => {
  return (
    <Grid className="footer-container" id="footer">
      <Typography
        variant="subtitle"
        sx={{ opacity: "0.9", fontSize: "1.1rem" }}
      >
        Contact@gmail.com
      </Typography>
      <Typography variant="subtitle2" sx={{ opacity: "0.5", mt: 1 }}>
        © The Prodigies, Inc. All rights reserved.
      </Typography>
    </Grid>
  );
};

export default Footer;
