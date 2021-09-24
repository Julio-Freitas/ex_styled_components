import { createContext } from "react";

type Action = { type: "increment" } | { type: "decrement" };
type State = { count: number };
type Disptach = (action: Action) => void;
type ContextType = { state: State; dispatch: Disptach };

export const CounterContext = createContext<ContextType | undefined>(undefined);