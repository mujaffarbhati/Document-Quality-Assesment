import { Grid } from "@mui/material";
import React from "react";
import Hero from "./Hero";
import About from "./AboutUs";
import InputSection from "./InputSection";
const Home = ({ handleSubmit, result }) => {
  return (
    <Grid>
      <Hero />
      <About />
      <InputSection handleSubmit={handleSubmit} result={result} />
    </Grid>
  );
};

export default Home;
