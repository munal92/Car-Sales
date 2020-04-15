import React from "react";

const Total = (props) => {
  return (
    // <div className="content">
    //   <h4 >Total Amount: ${props.car.price + props.additionalPrice}</h4>
    // </div>
    <div style={{ position: "absolute", bottom: "110px" }} className="content">
      <div class="notification is-danger">
        <span style={{ marginLeft: "16px", bottom: "0px" }}>
          Total Amount: ${props.car.price + props.additionalPrice}
        </span>
      </div>
    </div>
  );
};

export default Total;
