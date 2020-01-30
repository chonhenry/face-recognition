import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  var enterKeyPress = document.querySelector("input");

  enterKeyPress = event => {
    if (event.key === "Enter") {
      submit();
    }
  };

  const submit = () => {
    onButtonSubmit();
    document.querySelector("input").value = "";
  };

  return (
    <div>
      <p className="f1">Face Detection</p>
      <div className="center">
        <div className="form ba center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
            placeholder="Enter a image link"
            onKeyPress={enterKeyPress}
          ></input>
          <button
            className="btn w-30 grow f4 link ph3 pv2 dib black bg-light-blue"
            onClick={submit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
