// import React from "react";

import React, { useState } from "react";

type props = {
  height?: string;
  width?: string;
  position?: "absolute" | "relative";
  top?: string;
  left?: string;
  imgSrc?: string;
};

const RenderBlockMain: React.FC<props> = ({
  height = "10rem",
  width = "10rem",
  position = "relative",
  left = "0px",
  top = "0px",
  // className = "",
  imgSrc = "https://comicbook.com/wp-content/uploads/sites/4/2025/06/Robert-Downey-Jr-As-Tony-Stark.jpg",
}) => {
  const [hoverMouse, setHoverMouse] = useState<boolean>(false);

  const hoverMouseHandler = () => {
    setHoverMouse(true);
  };
  const LeaveMouseHandler = () => {
    setTimeout(() => {
      setHoverMouse(false);
    }, 500);
  };

  return (
    <div
      onMouseEnter={hoverMouseHandler}
      onMouseOver={hoverMouseHandler}
      onMouseLeave={LeaveMouseHandler}
      // className={`  overflow-hidden hover:cursor-pointer border border-white  ${className} `}
      style={{
        overflow: "hidden",
        border: "1px solid white",

        height: height,
        width: width,
        position: position,
        top: top,
        left: left,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          width: "100%",
          height: "100%",
          zIndex: "0",
          backgroundColor: "#3c4da3",
        }}
        // className=" absolute top-0 w-full h-full bg-cyan-700 z-0"
      ></div>

      <img
        src={imgSrc}
        // style={{ left: hoverMouse ? "0px" : leaveMouse ? "100%" : "-100%" }}
        style={{


          transition : "all 0.3s ",
          position : "absolute",
          top : "0px",
          width : "100%",
          height : "100%",
          zIndex : "10",
          objectFit: "cover",

          //   visibility: visibility,
          //   visibility:
          // hoverMouse === false && leaveMouse === false ? "hidden" : "visible",
          //   left: hoverMouse ? (leaveMouse ? "100%" : "0px") : " -100%",
          //   zIndex: visibility === "hidden" ? "-10" : "10",

          left: hoverMouse ? "0px" : "-100%",
          color: "red",
        }}
        // className={` transition-all duration-300 absolute top-0  w-full h-full z-10 object-cover `}
      ></img>
    </div>
  );
};

export default RenderBlockMain;
