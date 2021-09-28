import UseCount from "../../hooks/useCount";
import Button from "../button";

const Counter = () => {
  const { state, dispatch } = UseCount();
  return (
    <div>
      <div>{state.count >= 0 ? state.count : null}</div>
      <Button
        background="blue"
        hoverColor="red"
        type="button"
        title="Mais"
        color="white"
        onClick={() => state.count >= 0 && dispatch({ type: "increment" })}
      >
        +
      </Button>
      <Button
        background="blue"
        hoverColor="red"
        type="button"
        title="menos"
        color="white"
        onClick={() => state.count > 0 && dispatch({ type: "decrement" })}
      >
        -
      </Button>
    </div>
  );
};

export default Counter;
