import { Grid } from "@mui/material";
import React from "react";
import Hero from "./Hero";
import About from "./AboutUs";
import InputSection from "./InputSection";
const Home = ({handleSubmit}) => {
  return (
    <Grid >
      <Hero />
      <About />
      <InputSection handleSubmit={handleSubmit}/>
    </Grid>
  );
};

export default Home;
