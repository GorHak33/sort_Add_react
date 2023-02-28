import React from "react";
import { useState } from "react";

function Component(props) {
  if (props.data.length == 0) {
    return <h1>No data</h1>;
  }

  return (
    <div className="flex">
      {props.data.map(elem => {
        return (
          <div key={elem.id} className="flex-item">
            <button
              className="btn-delete"
              onClick={() => props.deleteById(elem.id)}
            >
              X
            </button>
            <h2>Name: {elem.firstName}</h2>
            <h3>email: {elem.email}</h3>
            <h4>Age: {elem.age}</h4>
          </div>
        );
      })}
      <button onClick={props.addPerson}>Add one more person</button>
      <button onClick={props.deleteAll}>Armagedon</button>
      <button onClick={props.sortByAge}>Sort by Age</button>
    </div>
  );
}

export default Component;
