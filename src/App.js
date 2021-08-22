import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ResetGlobalStyle from './styles/reset';
import themes from './styles/themes';
import Button from './components/button';

import * as Styled from './styles/container';

function App() {
  const [theme, setTheme] = useState(themes.dark);

  const _handleChangeTheme = () =>
    theme['title'] === 'dark' ? setTheme(themes.light) : setTheme(themes.dark);

  return (
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
      </Styled.Container>
    </ThemeProvider>
  );
}

export default App;
