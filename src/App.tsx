import { ThemeProvider } from "styled-components";
import { CounterProvider } from "./context/counter";
import ResetGlobalStyle from "./styles/reset";
import themes from "./styles/themes";

import Box from "./components/box";
import Layout from "./layout";
import { useState } from "react";

type Theme = "dark" | "light";

function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>("dark");
  const _handleClick = () => {
    if (currentTheme === "dark") setCurrentTheme("light");
    if (currentTheme === "light") setCurrentTheme("dark");
  };

  const cssDefaultInBox = {
    maxWidth: "100%",
    padding: "25px",
    borderRadius: "5px",
  };

  return (
    <CounterProvider>
      <ThemeProvider theme={themes[currentTheme]}>
        <Box
          as="section"
          css={{
            background: themes[currentTheme].background,
            color: themes[currentTheme].color,
            minHeight: "200px",
            display: "flex",
            gap: "50px",
            ...cssDefaultInBox,
          }}
        >
          <div>Image</div>
          <p>
            Alguma descrição da seção aqui!
            <button onClick={_handleClick}>Muda tema</button>
          </p>
        </Box>

        <Box
          css={{
            background: themes[currentTheme].background,
            color: themes[currentTheme].color,
            marginTop: "30px",
            height: "calc(100% - 250px)",
            ...cssDefaultInBox,
          }}
        >
          Contents
        </Box>

        <Box
          css={{
            background: themes[currentTheme].background,
            color: themes[currentTheme].color,
            marginTop: "30px",
            height: "calc(100% - 250px)",
            ...cssDefaultInBox,
          }}
        >
          Contents
        </Box>

        <Box
          as="footer"
          css={{
            background: themes[currentTheme].background,
            marginTop: "5px",
            padding: "5px",
          }}
        >
          <p style={{ color: themes[currentTheme].color }}>
            Desenvolvido por: Júlio Freitas
          </p>
        </Box>

        <ResetGlobalStyle />
      </ThemeProvider>
    </CounterProvider>
  );
}

export default App;
