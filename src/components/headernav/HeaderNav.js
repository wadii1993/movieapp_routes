import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

// const secondExample = {
//   size: 50,
//   count: 10,
//   color: "black",
//   activeColor: "red",
//   value: 7.5,
//   a11y: true,
//   isHalf: true,
//   emptyIcon: <i className="far fa-star" />,
//   halfIcon: <i className="fa fa-star-half-alt" />,
//   filledIcon: <i className="fa fa-star" />,
//   onChange: (newValue) => {
//     console.log(`Example 2: new value is ${newValue}`);
//   },
// };

const HeaderNav = ({ searchbytitle, searchbyrate }) => {
  const ratingbar = {
    size: 25,
    count: 5,
    isHalf: false,
    value: 0,
    color: "black",
    activeColor: "yellow",
    onChange: (newValue) => {
      searchbyrate(newValue);
    },
  };
  return (
    <div className="menu">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Link to="/">
            <Navbar.Brand className="jmovie">
              <h1 data-text="W.Movies">W.MOVIES</h1>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" style={{ marginRight: 100 }}>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex" style={{ marginRight: 20 }}>
              <Form.Control
                type="search"
                placeholder="Search"
                onChange={searchbytitle}
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <ReactStars {...ratingbar} />
            {/* <ReactStars
              count={5}
              onChange={searchbyrate}
              size={24}
              isHalf={true}
              activeColor="#ffd700"
            /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
