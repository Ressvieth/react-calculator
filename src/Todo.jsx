import PropTypes from "prop-types";
import { TODO_ACTIONS } from "./helpers";

export const Todo = ({ todo, dispatch }) => {
  return (
    <div className="todo">
      <span
        style={{
          color: todo.complete ? "#AAA" : "#000",
          textDecoration: todo.complete ? "line-through" : "none",
        }}
      >
        {todo.name}
      </span>
      <div className="todo-buttons">
        <button
          onClick={() =>
            dispatch({
              type: TODO_ACTIONS.TOGGLE_TODO,
              payload: { id: todo.id },
            })
          }
        >
          {todo.complete ? "Undo" : "Done"}
        </button>
        <button
          onClick={() =>
            dispatch({
              type: TODO_ACTIONS.DELETE_TODO,
              payload: { id: todo.id },
            })
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
};

Todo.propTypes = {
  todo: {
    id: PropTypes.string,
    name: PropTypes.string,
    complete: PropTypes.boolean,
  },
  dispatch: PropTypes.func.isRequired,
};
