type State = { user: string };
type Action = { type: "getUser" };

const INITAL_STATE = {
  user: "",
};

export default function RedurcerAuth(
  state: State = INITAL_STATE,
  action: Action
) {
  switch (action.type) {
    case "getUser":
      return { ...state, user: "Julio Cesar Lemos" };
    default:
      return INITAL_STATE;
  }
}
