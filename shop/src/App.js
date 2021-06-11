import React, { useState, useContext } from "react";
import { Button, Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./App.css";
import Data from "./data.js";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./Detail.js";
import axios from "axios";
import Cart from "./Cart.js";

export let stocksContext = React.createContext(); // 다른 JS 파일에서 쓰고 싶으면 export하면 됨!

function App() {
  let [shoes, setShoes] = useState(Data);
  let [stocks, setStocks] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail">
                Detail
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
            <stocksContext.Provider value={stocks}>
              <div className="row">
                {shoes.map((shoe, i) => {
                  return <Product shoes={shoe} i={i} key={i} />;
                })}
              </div>
            </stocksContext.Provider>
            <button
              className="btn btn-info"
              onClick={() => {
                axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then((result) => {
                    setShoes([...shoes, ...result.data]);
                  })
                  .catch(() => {
                    console.log("실패");
                  });
              }}
            >
              더보기
            </button>
          </div>
        </Route>
        {/* <Route path="/detail">
          <Detail shoes={shoes}/>
        </Route>
 */}
        <Route path="/detail/:id">
          <stocksContext.Provider value={stocks}>
            <Detail shoes={shoes} stocks={stocks} setStocks={setStocks} />
          </stocksContext.Provider>
        </Route>

        <Route path="/cart">
          <Cart></Cart>
        </Route>

        <Route path="/:id">
          <div>아무거나 쳤을 때 이거 나옴</div>
        </Route>
      </Switch>
    </div>
  );
}

function Product(props) {
  let stocks = useContext(stocksContext);
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
      {stocks[props.i]}
    </div>
  );
}

export default App;
