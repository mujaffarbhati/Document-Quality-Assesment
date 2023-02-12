import React from "react";
import "./Home.css";
import { Grid, Typography } from "@mui/material";
import heroImg from "../../assets/hero.png";
const Home = () => {
  return (
    <Grid
      className="hero-container"
      sx={{ pt: 22, display: "flex", alignItems: "center" }}
      id="#top"
    >
      <Grid sx={{ flex: 1 }} className="hero-left">
        <Typography className="title" variant="h2">
          Intelligent Document Assesment
        </Typography>
        <Typography className="sub-title" variant="h6">
          Eliminate 98% of manual work. Accelerate your enterprise automation
          with KlearStack’s document extraction, interpretation and
          straight-through processing platform. Get 90% accuracy in 90 days.
        </Typography>
        <Grid className="button">Assess Now</Grid>
      </Grid>
      <Grid sx={{ flex: 1 }} className="hero-right">
        <img src={heroImg} alt="hero-img" />
      </Grid>
    </Grid>
  );
};

export default Home;
