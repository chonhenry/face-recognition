import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f1">Face Detection</p>
      <div className="center">
        <div className="form ba center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="tetx"
            onChange={onInputChange}
            placeholder="Enter a image link"
          ></input>
          <button
            className="w-30 grow f4 link ph3 pv2 dib black bg-light-blue"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
