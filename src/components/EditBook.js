import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { Modal, Button } from "react-bootstrap";

const EditBook = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        style={{ textAlign: "center", paddingTop: "15rem" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Book Title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Input placeholder="New Book Title" />
        </Modal.Body>
        <Modal.Footer>
          <Link to="/auther-book">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Link>
          <Button
            variant="primary"
            onClick={handleClose}
            style={{ background: "green", borderColor: "green" }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditBook;
