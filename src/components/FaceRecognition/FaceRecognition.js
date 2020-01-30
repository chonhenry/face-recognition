import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ box, imageUrl }) => {
  let boxLeft = [null];
  let boxRight = [null];
  let boxTop = [null];
  let boxBottom = [null];
  let faceNum = 0;
  let face_to_insert, container_block;

  console.log("component outside: ", box.boxEdge);

  if (box.boxEdge !== undefined) {
    console.log("component: ", box.boxEdge);
    boxLeft = box.boxEdge.leftCol;
    boxRight = box.boxEdge.rightCol;
    boxTop = box.boxEdge.topRow;
    boxBottom = box.boxEdge.bottomRow;
    faceNum = box.boxEdge.leftCol.length;
    container_block = document.getElementById("container");

    let remove_child = document.querySelectorAll(".bounding-box");

    for (let i = 0; i < remove_child.length; i++) {
      let item = document.querySelector(".bounding-box");
      container_block.removeChild(item);
    }

    // console.log("remove: ", remove_child.length);

    for (let i = 0; i < faceNum; i++) {
      face_to_insert = document.createElement("div");
      face_to_insert.className = "bounding-box";
      face_to_insert.style = `top: ${boxTop[i]}px; right: ${boxRight[i]}px; bottom: ${boxBottom[i]}px; left: ${boxLeft[i]}px;`;
      container_block.appendChild(face_to_insert);
    }
  }

  return (
    <div className="center ma" id="main-container">
      <div className="absolute mt2" id="container">
        <img
          id="inputimage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        ></img>
      </div>
    </div>
  );
};

export default FaceRecognition;
