import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import React from "react";
import { useState } from "react";
const RenderBlockMain = ({ height = "10rem", width = "10rem", position = "relative", left = "0px", top = "0px", 
// className = "",
imgSrc = "https://comicbook.com/wp-content/uploads/sites/4/2025/06/Robert-Downey-Jr-As-Tony-Stark.jpg", }) => {
    const [hoverMouse, setHoverMouse] = useState(false);
    const hoverMouseHandler = () => {
        setHoverMouse(true);
    };
    const LeaveMouseHandler = () => {
        setTimeout(() => {
            setHoverMouse(false);
        }, 500);
    };
    return (_jsxs("div", { onMouseEnter: hoverMouseHandler, onMouseOver: hoverMouseHandler, onMouseLeave: LeaveMouseHandler, 
        // className={`  overflow-hidden hover:cursor-pointer border border-white  ${className} `}
        style: {
            overflow: "hidden",
            border: "1px solid white",
            height: height,
            width: width,
            position: position,
            top: top,
            left: left,
        }, children: [_jsx("div", { style: {
                    position: "absolute",
                    top: "0px",
                    width: "100%",
                    height: "100%",
                    zIndex: "0",
                    backgroundColor: "#3c4da3",
                } }), _jsx("img", { src: imgSrc, 
                // style={{ left: hoverMouse ? "0px" : leaveMouse ? "100%" : "-100%" }}
                style: {
                    transition: "all 0.3s ",
                    position: "absolute",
                    top: "0px",
                    width: "100%",
                    height: "100%",
                    zIndex: "10",
                    objectFit: "cover",
                    //   visibility: visibility,
                    //   visibility:
                    // hoverMouse === false && leaveMouse === false ? "hidden" : "visible",
                    //   left: hoverMouse ? (leaveMouse ? "100%" : "0px") : " -100%",
                    //   zIndex: visibility === "hidden" ? "-10" : "10",
                    left: hoverMouse ? "0px" : "-100%",
                    color: "red",
                } })] }));
};
export default RenderBlockMain;
