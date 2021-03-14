import React from "react";
import angular from "./angular.png";
import js from "./js.svg";
import jquery from "./jquery2.png";
import react from "./react.png";
import node from "./node.png";

function Logo(props) {
  const { name } = props;

  return (
    <div>
      {name.includes("Angular") ? (
        <img
          src={angular}
          alt="angular logo"
          className="event-logo"
          style={{ width: "35px" }}
        />
      ) : name.includes("JavaScript") ? (
        <img src={js} alt="js logo" className="event-logo" />
      ) : name.includes("jQuery") ? (
        <img
          src={jquery}
          alt="jquery logo"
          className="event-logo"
          style={{ width: "35px" }}
        />
      ) : name.includes("React") ? (
        <img src={react} alt="react logo" className="event-logo" />
      ) : (
        <img
          src={node}
          alt="node logo"
          className="event-logo node-logo"
          style={{ width: "40px" }}
        />
      )}
    </div>
  );
}

export default Logo;
