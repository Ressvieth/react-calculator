import { useReducer, useState } from "react";
import { Todo } from "./Todo";

export const TODO_ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case TODO_ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case TODO_ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
  }
}

function newTodo(name) {
  return { id: Date.now(), name, complete: false };
}

export const Todos = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: TODO_ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  }

  // console.log(todos);

  return (
    <div className="todos">
      TODO LIST:
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
};
