import React, { useReducer } from "react";
import couterReducer from "./reducer";
import { CounterContext } from "./context";

type CountProviderProps = { children: React.ReactNode };

function CounterProvider({ children }: CountProviderProps) {
  const [state, dispatch] = useReducer(couterReducer, { count: 0 });
  const value = { state, dispatch };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

export { CounterProvider };
