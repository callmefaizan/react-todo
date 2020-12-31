import { useState } from "react";
import Todo from "./Todo";
import "./App.css";

function App() {
  const [items, setItems] = useState("");
  const [items2, setItems2] = useState([]);
  const inputHandler = (e) => {
    setItems(e.target.value);
  };

  const btnHandler = () => {
    setItems2((oldItems) => {
      return [...oldItems, items];
    });
    setItems("");
  };
  const deleteItems = (id) => {
    // console.log("Deleted");
    setItems2((oldItems) => {
      return oldItems.filter((arrElem, ind) => {
        return ind !== id;
      });
    });
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <h1> REACT TODO APP BY FAIZAN..</h1>
        <br />
        <input
          type="text"
          placeholder="Add an item "
          onChange={inputHandler}
          value={items}
        />
        <button className="btn1" onClick={btnHandler}>
          +
        </button>
        <ul>
          {/* <li>{items}</li> */}
          {items2.map((itemval, ind) => {
            return (
              <Todo text={itemval} key={ind} id={ind} onSelect={deleteItems} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
