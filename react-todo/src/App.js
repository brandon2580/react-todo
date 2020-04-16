import React, { useReducer, useEffect, useState, createContext } from "react";
import { Card } from 'antd'
import InputField from "./Components/InputField";
import Todos from "./Components/Todos";
import './App.css'

export const TodoAppContext = createContext("");
function App() {
  const [todos, dispatch] = useReducer((state, action) => {
    if (action.type === "add") {
      if (state) state = [...state, action.value];
      else state = [action.value];
    } else if (action.type === "remove") {
      const newTodos = state.filter(todo => todo.id !== action.value);
      state = [...newTodos];
    }

    localStorage.setItem("todos", JSON.stringify(state));
    return state;
  }, JSON.parse(localStorage.getItem("todos")) || []);


  useEffect(() => {
    document.title = `${todos.length} Todos`;
    return () => {
      localStorage.removeItem("todos");
    };
  }, [todos]);

  const handleRemoveItem = id => {
    dispatch({ type: "remove", value: id });
  };

  const handleAddTodo = todo => {
    dispatch({ type: "add", value: todo });
  };

  return (
    <Card className='todo-card'>
      <h1 className='header'>Todo List</h1>
      <div className='center'>
        <TodoAppContext.Provider>
          <InputField handleAddTodo={handleAddTodo} />
          <div>
            <Todos todoList={todos} handleRemoveItem={handleRemoveItem} />
          </div>
        </TodoAppContext.Provider>
      </div>
    </Card>
  );
}

export default App