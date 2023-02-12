import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";

function ImageUploader({ handleSubmit }) {
  const [image, setImage] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.dataTransfer.files[0];

    reader.onloadend = () => {
      setImage(reader.result);
    };

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

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    };
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <Grid sx={{ pt: 15 }} className="input-container" id="assess">
      <Typography variant="h3" className="title" sx={{ fontWeight: "bolder" }}>
        Assess Document
      </Typography>
      <Grid
        sx={{ mt: 10 }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          width: "450px",
          height: "300px",
          border: "2px dashed var(--matt-black)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          maxWidth: "100%",
        }}
        onClick={handleClick}
      >
        {image ? (
          <img src={image} alt="Uploaded Image" className="uploaded-image" />
        ) : (
          <p>Drop an image here to upload</p>
        )}

        {/* <button onClick={handleSubmit}>Submit</button> */}
      </Grid>
      {image && (
        <Typography variant="subtitle2" sx={{ mt: 2 }}>
          Click on the above image to change
        </Typography>
      )}
      <Button
        className="button"
        disabled={image == null}
        onClick={(e) => handleSubmit(e, image)}
        // TODO- add loader
      >
        Submit
      </Button>
    </Grid>
  );
}

export default ImageUploader;
