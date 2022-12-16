import arrowImg from "../../img/arrow-bar-down.svg";
import complete from "../../img/check2-circle.svg";
import scratch from "../../img/trash.svg";
import reback from "../../img/reback.svg";
import expand from "../../img/expand.svg";
import back from "../../img/back.svg";
import update from "../../img/update.svg";

function Button(props) {
  switch (props.type) {
    case "complete": {
      return (
        <button
          className="btn btn-outline-light"
          onClick={props.onClick}
          style={{ background: "#FFCAD5" }}
        >
          <img src={complete} />
        </button>
      );
    }
    case "reback": {
      return (
        <button
          className="btn btn-outline-light"
          onClick={props.onClick}
          style={{ background: "#FFDC37" }}
        >
          <img src={reback} />
        </button>
      );
    }
    case "scratch": {
      return (
        <button
          className="btn btn-outline-light"
          onClick={props.onClick}
          style={{ background: "#6EDCDC" }}
        >
          <img src={scratch} />
        </button>
      );
    }
    case "expand": {
      return (
        <button
          className="btn btn-outline-light"
          onClick={props.onClick}
          style={{ background: "#6EDCDC" }}
        >
          <img src={expand} />
        </button>
      );
    }
    case "back": {
      return (
        <button
          className="btn btn-outline-light"
          onClick={props.onClick}
          style={{ background: "#6EDCDC" }}
        >
          <img src={back} />
        </button>
      );
    }
    case "update": {
      return (
        <button
          className="btn btn-outline-light"
          onClick={props.onClick}
          style={{ background: "#6EDCDC" }}
        >
          <img src={update} />
        </button>
      );
    }
    default: {
      return (
        <button
          //className="btn btn-outline-light"
          onClick={props.onClick}
          style={{ background: "#54BD54", border: "none" }}
        >
          <img src={arrowImg} />
        </button>
      );
    }
  }
}

export default Button;
