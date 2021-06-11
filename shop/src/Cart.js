import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

const Cart = (props) => {
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {Array.from({ length: 4 }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 4 }).map((_, index) => (
              <td key={index}>{props.state[0].name} {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

function ff(state) {
  // 변수 store안의 데이터를 가져와서 props화 시키는 함수 <state를 props화>
  return {
    state: state,
  };
}

export default connect(ff)(Cart);
// export default Cart;
