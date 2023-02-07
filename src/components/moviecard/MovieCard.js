import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const MovieCard = ({ el, del }) => {
  return (
    <div>
      <Card className="movie" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={el.urlmovie_img}
          style={{ height: "500px", width: "286px" }}
        />
        <Card.Body className="movie_over">
          <Card.Title>{el.titre}</Card.Title>
          <Card.Text className="movie-info">
            {el.date}
            <ReactStars
              count={el.rate}
              // onChange={ratingChanged}
              size={24}
              isHalf={true}
              color="#ffd700"
            />
          </Card.Text>
          <div>
            <Link to={`/detailsmovie/${el.id}`}>
              {" "}
              <Button variant="primary">details</Button>
            </Link>
            <Button variant="danger" onClick={() => del(el.id)}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
