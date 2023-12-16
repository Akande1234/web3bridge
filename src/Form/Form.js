import React from "react";

function Form(props) {
  return (
    <div className="note">
      <h1>{props.name}</h1>
      <p>{props.email}</p>
      <p>{props.number}</p>
    </div>
  );
}

export default Form;
