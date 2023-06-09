import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import SavedList from "../SavedList";
import { saved } from "../Buttons/SaveButton";

import logo from "../../assets/images/art.png";

export default function Header() {
  const navigate = useNavigate();

  // Modal functionality
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header
      className="container-fluid d-flex align-items-center justify-content-between"
      style={{
        width: "100%",
        height: 150,
        backgroundColor: "#59c09a",
      }}
    >
      {/* Greeting and Logo */}
      <div style={{ display: "inline-flex" }}>
        <img
          src={logo}
          alt="Colour Factory Logo"
          width={45}
          height={45}
          style={{ marginRight: 15 }}
        />
        <h1>Welcome to Colour Factory!</h1>
      </div>

      {/* Buttons to Home and Saved Palettes */}
      <div className="col-3" style={{ maxWidth: 200 }}>
        <Button
          sx={{ width: "100%" }}
          onClick={() => navigate("/")}
          variant="contained"
        >
          Home
        </Button>{" "}
        <br /> <br />
        <Button sx={{ width: "100%" }} onClick={handleShow} variant="contained">
          Saved Palettes
        </Button>
      </div>

      {/* Modal Container for saved palettes */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title
            className="m-auto"
            style={{ textDecoration: "underline" }}
          >
            Your Saved Colour Palettes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="container">
          <table className="table">
            <thead>
              <tr className="text-center">
                <th scope="col">Seed Colour</th>
                <th scope="col">Number of Colours</th>
                <th scope="col">Date</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody id="tableBody">
              {saved.map((e) => (
                <SavedList
                  key={e[0]}
                  name={e[0]}
                  colour={e[1]}
                  num={e[2]}
                  time={e[3]}
                />
              ))}
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className=""
            onClick={() => {
              localStorage.clear();
            }}
            href="/"
          >
            Clear all saves
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
}
