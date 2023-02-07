import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddMovie = ({ hundleAdd }) => {
  const [valeur, setValeur] = useState("");
  const handleChange = (e) =>
    setValeur({ ...valeur, [e.target.name]: e.target.value });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Link to="/">
        <Button variant="primary" onClick={handleShow}>
          Add your movie
        </Button>
      </Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3> Add The Movie</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Title</h4>
          <Form.Control
            type="text"
            name="titre"
            onChange={handleChange}
            value={valeur.titre}
            placeholder="Put the title here"
          />
          <br />
          <h4>Poste </h4>
          <Form.Control
            type="text"
            name="urlmovie_img"
            onChange={handleChange}
            value={valeur.urlmovie}
            placeholder="write here"
          />
          <br />
          <h4>Description</h4>
          <Form.Control
            type="text"
            name="description"
            onChange={handleChange}
            value={valeur.description}
            placeholder="type here"
          />
          <br />
          <h4>Release Date</h4>
          <Form.Control
            type="text"
            name="date"
            onChange={handleChange}
            value={valeur.date}
            placeholder="type here"
          />
          <br />
          <h4>Movie Trailer</h4>
          <Form.Control
            type="text"
            name="trailerurl"
            onChange={handleChange}
            value={valeur.trailerurl}
            placeholder="type here"
          />
          <br />
          <h4>Rating</h4>
          <Form.Control
            type="text"
            name="rate"
            onChange={handleChange}
            value={valeur.rate}
            placeholder="type here"
          />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              hundleAdd(valeur);
              handleClose();
              setValeur({
                id: Math.random(),
                urlmovie_img: "",
                rate: 0,
                titre: "",
                date: "",
                trailerurl: "",
                description: "",
              });
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
