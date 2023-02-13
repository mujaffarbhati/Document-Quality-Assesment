import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import "./Result.css";

const Result = ({ result, ocrText }) => {
  let resultText = "";
  if (result === 0) resultText = "Very Bad";
  if (result === 1) resultText = "Bad";
  if (result === 2) resultText = "Good";
  if (result === 3) resultText = "Very Good";
  let resultColor = "#ff0000";
  if (result === 2 || result === 3) resultColor = "#228B22";
  return (
    <Grid className="result-container">
      <Typography className="result-text" sx={{ pt: 24 }} variant="h2">
        Your Image quality is{" "}
        <span style={{ color: resultColor }}>{resultText}</span>
        ! <br />
        {result === 0 && "Please upload a clear picture"}
      </Typography>
      {/* {result === 1 && (
        // TODO - ADD LOADER
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 5,
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            No worries! We got you covered..
          </Typography>
          <Button sx={{ mt: "0 !important" }} className="button">
            Optimize to Obtain OCR Text
          </Button>
        </Grid>
      )} */}

      {(result === 2 || result === 3) && (
        <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
          Great! Proceeding to OCR text
        </Typography>
      )}
      
      {ocrText && (result === 2 || result === 3) && (
        <Grid sx={{ mt: 10 }}>
          <Typography sx={{ mb: 3, fontWeight: "700" }} variant="h4">
            OCR Text
          </Typography>
          <Typography variant="subtitle" className="ocr-text">
            {ocrText}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default Result;
