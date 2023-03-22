import React, { useState } from "react";
import { hexCode } from "../ColorPicker";
import { Modal } from "react-bootstrap";
import Button from "@mui/material/Button";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header
      className="container-fluid d-flex align-items-center justify-content-between font"
      style={{
        width: "100%",
        height: 150,
        backgroundColor: hexCode,
      }}
    >
      <h1>Welcome to Colour Factory!</h1>
      <button onClick={handleShow} className="btn btn-primary"
      >
        My saved palettes
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="m-auto">
            Your saved color palettes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Something saved with button</h3>
          <h3>Something saved with button</h3>
          <h3>Something saved with button</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button 
          className=""
          onClick={() => {localStorage.clear()}}
          >
            Clear all saves
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
}
