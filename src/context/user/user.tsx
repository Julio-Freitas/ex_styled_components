import { useReducer } from "react";
import { ContextUser } from "./context";
import RedurcerAuth from "./reducer";

type User = {
  children: React.ReactChild;
};
const ProviderUser = ({ children }: User) => {
  const [state, dispatch] = useReducer(RedurcerAuth, { user: "" });

  return <ContextUser.Provider value={{ state, dispatch }}>{children}</ContextUser.Provider>;
};

export default ProviderUser;
