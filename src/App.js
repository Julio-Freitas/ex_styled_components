import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { CounterProvider } from "./context/counter";
import UserProvider from "./context/user";
import ResetGlobalStyle from "./styles/reset";
import themes from "./styles/themes";
import Button from "./components/button";

import * as Styled from "./styles/container";
import ButtonCssNormal from "./components/buttonCssNormal/buttonCssNormal";
import Counter from "./components/counter";
import UseAuth from "./hooks/userAuth";

function User() {
  const { state, dispatch } = UseAuth();
  const { user } = state;
  return (
    <Button
      background="#4CAF50"
      hoverColor="#555555"
      color="white"
      onClick={() => dispatch({ type: !user ? "getUser" : "" })}
    >
      {user ? user : "clique aqui"}
    </Button>
  );
}

function App() {
  const [theme, setTheme] = useState(themes.dark);

  const _handleChangeTheme = () =>
    theme["title"] === "dark" ? setTheme(themes.light) : setTheme(themes.dark);

  return (
    <CounterProvider>
      <ThemeProvider theme={theme}>
        <ResetGlobalStyle />
        <Styled.Container>
          <h1>COMPONENTES</h1>
          <Button
            background="#4CAF50"
            hoverColor="#555555"
            color="white"
            onClick={_handleChangeTheme}
          >
            Mudar o theme
          </Button>

          <ButtonCssNormal hoverColor />
          <Counter />
        </Styled.Container>
        <UserProvider>
          <User />
        </UserProvider>
      </ThemeProvider>
    </CounterProvider>
  );
}

export default App;
