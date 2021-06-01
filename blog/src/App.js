import React, { useState } from "react";
import "./App.css";

const App = () => {
  let [title, setTitle] = useState(["홈랜드", "남부의 여왕", "지정 생존자"]);
  let [like, setLike] = useState(0);
  let [flag, setFlag] = useState(false);
  let [num, setNum] = useState(0);
  let [입력값, 입력값변경] = useState("");
  let arr2 = [...title];

  function changeTitle() {
    let arr = [...title];
    arr.sort();
    setTitle(arr);
    // let order = document.querySelector(".order");
    // order.innerHTML = "추천순";
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h1>개발 Blog</h1>
      </div>
      <button className="order" onClick={changeTitle}>
        가나다
      </button>
      <div className="list">
        <h2>
          {title[0]}{" "}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            👍
          </span>{" "}
          {like}
        </h2>
        <p>5월 31일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h2>{title[1]}</h2>
        <p>5월 31일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h2>{title[2]}</h2>
        <p>5월 31일 발행</p>
        <hr />
      </div>

      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h2
              onClick={() => {
                setNum(i);
              }}
            >
              {a}{" "}
              <span
                onClick={() => {
                  setLike(like + 1);
                }}
              >
                👍
              </span>{" "}
              {like}
            </h2>
            <p>5월 31일 발행</p>
            <hr />
          </div>
        );
      })}

      <div className="publish">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        />
        <button
          onClick={() => {
            arr2.unshift(입력값);
            setTitle(arr2);
          }}
        >
          저장
        </button>
      </div>

      {/* {입력값}
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      /> */}

      <button
        onClick={() => {
          setFlag(!flag);
        }}
      >
        모달
      </button>
      {flag === true ? <Modal title={title} num={num} /> : null}
    </div>
  );
};

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[props.num]}</h2>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  );
}

export default App;
