import React from "react";
import Todo from "./Todo";
import { TodoAppContext } from "../App.js";

const Todos = (props) => {
  const { todoList, handleRemoveItem } = props;
  const theme = React.useContext(TodoAppContext);

  return (
    <ul>
      {todoList.map(todo => (
        <Todo
          {...todo}
          handleRemoveItem={() => {
            handleRemoveItem(todo.id);
          }}
          key={todo.id}
          className='white'
        />
      ))}
    </ul>
  );
}

export default Todos