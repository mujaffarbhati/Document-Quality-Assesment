import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";

function ImageUploader({ handleSubmit, result }) {
  const [image, setImage] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.dataTransfer.files[0];

    // reader.onloadend = () => {
    // setImage(reader.result);
    // };
    setImage(e.target.files[0]);

    reader.readAsDataURL(file);
    console.log(image);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.click();

    fileInput.onchange = (e) => {
      let reader = new FileReader();
      let file = e.target.files[0];

      // reader.onloadend = () => {
      //   setImage(reader.result);
      // };
      setImage(e.target.files[0]);

      reader.readAsDataURL(file);
    };
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  let resultText = "";
  if (result === 0) resultText = "Very Bad";
  if (result === 1) resultText = "Bad";
  if (result === 2) resultText = "Good";
  if (result === 3) resultText = "Very Good";
  let resultColor = "#ff0000";
  return (
    <Grid sx={{ pt: 15 }} className="input-container" id="assess">
      <Typography
        variant="h3"
        className="title"
        sx={{ fontWeight: "bolder", mb: 4 }}
      >
        Assess Document
      </Typography>
      <Grid
      // sx={{ mt: 10 }}
      // onDrop={handleDrop}
      // onDragOver={handleDragOver}
      // style={{
      //   width: "450px",
      //   height: "300px",
      //   border: "2px dashed var(--matt-black)",
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   cursor: "pointer",
      //   maxWidth: "100%",
      // }}
      // onClick={handleClick}
      >
        <input
          type="file"
          id="images"
          accept="image/*"
          required
          onDrop={handleDrop}
          // onDragOver={handleDragOver}
          style={{
            // width: "450px",
            // height: "300px",
            // border: "2px dashed var(--matt-black)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            maxWidth: "100%",
            margin: "auto",
          }}
          onClick={handleClick}
        />
        {image && (
          <img
            id="uploaded-img-preview"
            src={URL.createObjectURL(image)}
            alt="Uploaded Image"
            className="uploaded-image"
          />
        )}
        {/* <button onClick={handleSubmit}>Submit</button> */}
      </Grid>
      {/* {image && (
        <Typography variant="subtitle2" sx={{ mt: 2 }}>
          Click on the above image to change
        </Typography>
      )} */}
      <Button
        className="button"
        disabled={image == null}
        onClick={(e) => handleSubmit(e, image)}
        // TODO- add loader
      >
        Submit
      </Button>
      {/* {result && (
        <Typography className="result-text" sx={{ pt: 24 }} variant="h2">
          Your Image quality is{" "}
          <span style={{ color: resultColor }}>{resultText}</span>
          ! <br />
          {result === 0 && "Please upload a clear picture"}
        </Typography>
      )} */}
    </Grid>
  );
}

export default ImageUploader;
