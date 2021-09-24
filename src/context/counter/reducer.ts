type Action = { type: "increment" } | { type: "decrement" };
type State = { count: number };

export  default function couterReducer(state: State, { type }: Action) {
    switch (type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error(`Unhandled action type: ${type}`);
    }
  }
  