import "./TodoContainer.css";
import Todoitem from "../Todoitem/Todoitem";


function TodoContainer(props) {
  return (
    <div className="wrapper">
      {props.arr.length ? (
        props.arr.map((el) => (
        <Todoitem
          key={el.id}
          id={el.id}
          title={el.title}
          status={el.status}
          deleteTodo={props.deleteTodo}
          done={props.done}
          saveTodo={props.saveTodo}
        />
        ))
      ):(
        <h1>Пока нет задач</h1>
      )}
    </div>
  );
}

export default TodoContainer;
