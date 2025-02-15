import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        count: state.count + 1,
      };
    case ACTIONS.DECREMENT:
      return {
        count: state.count - 1,
      };
  }
}

// state = { count: 0 }
export const PlusMinus = () => {
  // const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    // setCount((prevCount) => prevCount + 1)
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    // setCount((prevCount) => prevCount - 1)
    dispatch({ type: ACTIONS.DECREMENT });
  };

  return (
    <div className="plusMinus">
      <button onClick={decrement}>-</button>
      <p>{state.count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};
