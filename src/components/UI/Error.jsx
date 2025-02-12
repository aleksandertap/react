import React, { Fragment } from "react";
import Card from "./Card";
import Button from "./Button";
import "./Error.css";
import { createPortal } from "react-dom";

const BackDrop = () => {
  return <div className="backdrop" />;
};

const ModalOverlay = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="footer">
        <button onClick={props.onConfirm}>OK</button>
      </footer>
    </Card>
  );
};

const Error = (props) => {
  return (
    <Fragment>
      {createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};
export default Error