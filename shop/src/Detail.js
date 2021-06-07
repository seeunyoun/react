import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./Detail.scss";

const Detail = (props) => {
  let { id } = useParams(); // {} 중괄호가 생성됨!
  let history = useHistory();
  let 찾은상품 = props.shoes.find(function (상품) {
    return 상품.id == id;
  });

  return (
    <div className="container">
      <div className="my-alert">
        <p>재고가 얼마 남지 않았습니다.</p>
      </div>
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
          <button className="btn btn-danger">주문하기</button>
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
    </div>
  );
};

export default Detail;
