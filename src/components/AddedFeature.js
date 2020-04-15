import React from "react";

const AddedFeature = (props) => {
  return (
    //     <li>

    //       {/* Add an onClick to run a function to remove a feature */}
    //       <button onClick={() => props.removeFeature(props.feature)} className="button"></button>
    //       {props.feature.name}
    //       <span class="icon has-text-success">
    //   <i class="fas fa-check-square"></i>
    // </span>
    //     </li>
    <div class="notification is-success">
      <span style={{ marginLeft: "16px" }}>{props.feature.name}</span>
      <button
        style={{ left: "6px" }}
        onClick={() => props.removeFeature(props.feature)}
        class="delete"
      ></button>
    </div>
  );
};

export default AddedFeature;
