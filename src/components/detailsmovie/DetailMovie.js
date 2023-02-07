import React from "react";
import { Accordion } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import "./DetailMovie.css";
const DetailMovie = ({ movy }) => {
  const params = useParams();
  const film = movy.find((el) => el.id === Number(params.id));
  console.log(film);
  return (
    <div className="granddiv">
      <br />
      <div className="cadre">
        <h1 className="titre1">{film.titre}</h1>
      </div>
      <div className="imgandvideo">
        <img
          src={film.urlmovie_img}
          alt="logo"
          style={{
            height: "400px",
            width: "300px",
            borderRadius: "15px",
          }}
        ></img>
        <br></br>
        <iframe
          src={film.trailerurl}
          title="fff"
          style={{ height: "400px", width: "950px", borderRadius: "15px" }}
        ></iframe>
      </div>
      <div className="desc">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span style={{ fontSize: "20px", color: "black" }}>
                Video Description
              </span>{" "}
            </Accordion.Header>
            <Accordion.Body>
              <p>{film.description}</p>
              <br />
              <h2>{film.date}</h2>
              <br />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="rat">
          <h3 style={{ color: "black" }}>Rate :</h3>
          <ReactStars
            count={film.rate}
            size={24}
            isHalf={true}
            color="#ffd700"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
