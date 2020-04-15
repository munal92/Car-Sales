import React from "react";

const Header = (props) => {
  return (
    <>
      {/* <div class="notification is-danger">
<figure className="image is-128x128">
        <img  class="is-rounded" src={props.car.image} alt={props.car.name} />
      </figure>
<span style={{margin:"0px", padding:"0px"}}>{props.car.name}<br/>Amount: ${props.car.price}</span>

</div> */}

      <div class="box" style={{ height: "130px", backgroundColor: "#f3e7b7" }}>
        <article class="media">
          <div class="media-left">
            <figure className="image is-128x128">
              <img src={props.car.image} alt={props.car.name} />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <span
                style={{ height: "60px", backgroundColor: "#f3e7b7" }}
                class="tag is-large"
              >
                {props.car.name}
                <br /> Amount: ${props.car.price}
              </span>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Header;
