import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import React from "react";
import { useEffect, useState } from "react";
const RenderBlock = () => {
    const [hoverMouse, setHoverMouse] = useState(false);
    const [leaveMouse, setLeaveMouse] = useState(false);
    const [visibility, setVisibility] = useState("visible");
    // console.log(hoverMouse, leaveMouse, visibility);
    const handleMouseEnter = () => {
        setHoverMouse(true);
        // setIgnore(true);
        // alert("hello");
    };
    const handleMouseLeave = () => {
        setTimeout(() => {
            //   setHoverMove(false);
            handleLeavingMouse();
        }, 200);
    };
    const handleLeavingMouse = () => {
        setLeaveMouse(true);
    };
    useEffect(() => {
        // // // now reset the states.
        if (hoverMouse && leaveMouse) {
            setVisibility("hidden");
            setTimeout(() => {
                setHoverMouse(false);
                setLeaveMouse(false);
                setTimeout(() => {
                    setVisibility("visible");
                }, 250);
            }, 500);
        }
    }, [leaveMouse, hoverMouse]);
    return (_jsxs("div", { 
        //   onMouseOver={handleMouseOver}
        onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, className: " w-24 h-24 relative overflow-hidden hover:cursor-pointer border border-white ", children: [_jsx("div", { className: " absolute top-0 w-full h-full bg-cyan-700 z-0" }), _jsx("img", { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabvlv3A9IEvy1ELgSLj0oMcZoABvIek6gdQ&s", 
                // style={{ left: hoverMouse ? "0px" : leaveMouse ? "100%" : "-100%" }}
                style: {
                    visibility: visibility,
                    //   visibility:
                    // hoverMouse === false && leaveMouse === false ? "hidden" : "visible",
                    left: hoverMouse ? (leaveMouse ? "100%" : "0px") : " -100%",
                    //   zIndex: visibility === "hidden" ? "-10" : "10",
                }, className: ` transition-all duration-300 absolute top-0  w-full h-full z-10 object-cover ` })] }));
};
export default RenderBlock;
