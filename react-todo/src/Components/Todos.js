import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  const { todoList, handleRemoveItem } = props;

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