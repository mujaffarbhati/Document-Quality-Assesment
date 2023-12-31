import { Grid, Typography } from "@mui/material";
import React from "react";
import aboutImage from "../../assets/about.png";

const About = () => {
  return (
    <Grid
      id="about-us"
      sx={{ textAlign: "center", pt: 15, pb: 8 }}
      className="about-container"
    >
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row-reverse",
        }}
      >
        <Grid>
          <Typography
            variant="h3"
            className="title"
            sx={{ fontWeight: "bolder" }}
          >
            About Us
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              mt: 5,
              fontSize: "1.2rem",
              opacity: "0.75",
              lineHeight: "1.5",
            }}
          >
            Our platform is designed to help you quickly and easily assess the
            readability of your forms and other unstructured data. Simply upload
            your data and let our advanced algorithms do the rest. Our platform
            provides a comprehensive report within minutes. With our
            user-friendly interface and expertly designed procedures, you can be
            confident that your unstructured data is easily readable by all.
            Ensure the clarity and quality of your data today with our platform.
          </Typography>
        </Grid>
        <img className="about-image" src={aboutImage} alt="about" />
      </Grid>
    </Grid>
  );
};

export default About;
