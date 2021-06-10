import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./Detail.scss";
import { stocksContext } from "./App";
import { Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

const Detail = (props) => {
  let [alert, setAlert] = useState(true);
  let [inputData, setInputData] = useState("");
  let stocks = useContext(stocksContext);
  let [tab, setTab] = useState(0); // 현재 누른 버튼의 번호를 저장할 공간!
  let [convert, setConvert] = useState(false);

  useEffect(() => {
    // 컴포넌트가 mount 되었을 때, 컴포넌트가 update 될 때 특정 코드를 실행할 수 있음
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);

  let { id } = useParams(); // {} 중괄호가 생성됨!
  let history = useHistory();
  let 찾은상품 = props.shoes.find(function (상품) {
    return 상품.id == id;
  });

  return (
    <div className="container">
      {inputData}
      <input
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
      {alert === true ? (
        <div className="my-alert">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (props.shoes[id].id + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="red pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>

          <Info stocks={props.stocks} />

          <button
            className="btn btn-danger"
            onClick={() => {
              let amount = [...props.stocks];
              amount.map((a, b) => {
                return a - 1;
              });
              props.setStock(amount);
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setConvert(false);
              setTab(0);
            }}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setConvert(false);
              setTab(1);
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>{" "}
      <CSSTransition in={true} classNames="wow" timeout={500}>
        <TabContent tab={tab} setConvert={setConvert} />
      </CSSTransition>
    </div>
  );
};

function TabContent(props) {
  useEffect(() => {
    props.setConvert(true);
  });

  if (props.tab === 0) {
    return <div>0번째 내용입니다</div>;
  } else if (props.tab === 1) {
    return <div>1번째 내용입니다</div>;
  } else if (props.tab === 2) {
    return <div>2번째 내용입니다</div>;
  }
}

function Info(props) {
  return <p>재고 : {props.stocks[0]}</p>;
}

export default Detail;
