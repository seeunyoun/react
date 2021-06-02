import React, { useState } from "react";
import { Button, Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./App.css";
import Data from "./data.js";

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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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
      <div className="jumbotron">
        <h1>20% season OFF</h1>
        <p>jumbotron</p>
        <Button variant="primary">jumbotron</Button>{" "}
      </div>
      <div className="container">
        <div className="row">
          {shoes.map((shoe, i) => {
            return (
              <div className="col-md-4" key={i}>
                <img src={shoe.img} width="100%" />
                <h4>{shoe.title}</h4>
                <p>
                  {shoe.content} & {shoe.price}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// function Product(props) {
//   <div className="col-md-4">
//     <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
//     <h4>{props.shoes[props.num].title}</h4>
//     <p>
//       {props.shoes[0].content} & {props.shoes[0].price}
//     </p>
//   </div>;
// }

export default App;
