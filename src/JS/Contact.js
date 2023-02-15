import React from "react";
import Contracts from "./Contracts";
import "../CSS/Contact.css";



const Contract = (props) => {
    return (
      <div className="Contact">
        <div>
          <p>{props.data.firstName} </p>
          <p>{props.data.lastName}</p>
        </div>
        <div>
          <p>{props.data.phone}</p>
          <p>{props.data.gender}</p>
        </div>
      </div>
    );
  };
  
  export default Contract;