import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const DeleteBook = (props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  const deleteBook = async (id) => {
    try {
    } catch (err) {
      console.log("[ERROR]", err);
    }
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
          <Modal.Title>Delete Book</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Modal.Body>You want to delete book, are you sure?</Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/auther-book">
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Link>
          <Button
            variant="primary"
            onClick={handleClose}
            style={{ background: "red", borderColor: "red" }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteBook;
