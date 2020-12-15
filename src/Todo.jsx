import React from "react";
import "./App.css";

const Todo = (props) => {
  return (
    <>
      <div className="liDiv">
        <li>
          <span>{props.text} </span>
          <span>
            <button
              className="btn2"
              onClick={() => {
                props.onSelect(props.id);
              }}
            >
              x
            </button>
          </span>
        </li>
      </div>
    </>
  );
};

export default Todo;
