import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import ImageGrid from "./ImageGrid";
import ImageModal from "./ImageModal";

const ImgUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const types = ["image/png", "image/jpeg"];

  function changeHandler(e) {
    let selected = e.target.files[0];
    console.log(selected);
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  }
  return (
    <>
      {/* <form>
        <input type="file" onChange={changeHandler} />
        {error && <div className="error">{error}</div>}
        {file && <div className="error">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </form> */}
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <ImageModal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </>
  );
};

export default ImgUpload;
