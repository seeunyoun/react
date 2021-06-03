import React, { useState } from "react";
import { Button, Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./App.css";
import Data from "./data.js";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./Detail.js";

function App() {
  let [shoes, setShoes] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/detail">Detail</Link>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
      <Switch>
        <Route exact path="/">
          <div className="jumbotron">
            <h1>20% season OFF</h1>
            <p>jumbotron</p>
            <Button variant="primary">jumbotron</Button>{" "}
          </div>
          <div className="container">
            <div className="row">
              {shoes.map((shoe, i) => {
                return <Product shoes={shoe} i={i} key={i} />;
              })}
            </div>
          </div>
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
        <Route path="/:id">
          <div>아무거나 쳤을 때 이거 나옴</div>
        </Route>
      </Switch>
    </div>
  );
}

function Product(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="100%"
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
    </div>
  );
}

export default App;
