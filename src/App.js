import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import "./App.css";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "627b9aa1d4774bc7a1d263c828bcb869"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {}
    };
  }

  calculateFaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    const faceNum = data.outputs[0].data.regions.length;
    const boxEdge = { leftCol: [], topRow: [], rightCol: [], bottomRow: [] };
    // console.log(faceNum);

    for (let i = 0; i < faceNum; i++) {
      boxEdge.leftCol.push(
        data.outputs[0].data.regions[i].region_info.bounding_box.left_col *
          width
      );
      boxEdge.topRow.push(
        data.outputs[0].data.regions[i].region_info.bounding_box.top_row *
          height
      );
      boxEdge.rightCol.push(
        width -
          data.outputs[0].data.regions[i].region_info.bounding_box.right_col *
            width
      );
      boxEdge.bottomRow.push(
        height -
          data.outputs[0].data.regions[i].region_info.bounding_box.bottom_row *
            height
      );
    }

    // console.log("calculate: ", boxEdge);

    return {
      boxEdge
    };
  };

  displayFaceBox = box => {
    this.setState({ box: box });
    // console.log("state box: ", this.state.box);
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = event => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        this.displayFaceBox(this.calculateFaceLocation(response));
        //console.log(response);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        {/* <Navigation /> */}
        <Logo />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
