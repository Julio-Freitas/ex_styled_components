import { useReducer } from "react";
import { ContextUser } from "./context";
import RedurcerAuth from "./reducer";

type User = {
  children: React.ReactChild;
};
const ProviderUser = ({ children }: User) => {
  const [state, dispatch] = useReducer(RedurcerAuth, { user: "" });
  const value = { state, dispatch };
  return <ContextUser.Provider value={value}>{children}</ContextUser.Provider>;
};

export default ProviderUser;
