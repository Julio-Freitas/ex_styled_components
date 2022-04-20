import { createContext } from "react";

type State = { user: string};
type Action = { type: 'getUser' | ""};
type Dispatch= (action: Action) => void;
type ContexUser = { state: State, dispatch: Dispatch};

export const ContextUser = createContext<ContexUser | undefined>(undefined);