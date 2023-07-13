import "./TodoContainer.css";
import Todoitem from "../Todoitem/Todoitem";
import { useState } from "react";

function TodoContainer(props) {
  return (
    <div className="wrapper">
      {props.arr.map((el) => (
        <Todoitem
          key={el.id}
          id={el.id}
          title={el.title}
          status={el.status}
          deleteTodo={props.deleteTodo}
          done={props.done}
          saveTodo={props.saveTodo}
        />
      ))}
    </div>
  );
}

export default TodoContainer;
