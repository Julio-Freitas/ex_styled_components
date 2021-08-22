import Button from './components/button';
import ResetGlobalStyle from './styles/reset';
import * as Styled from './styles/container';

function App() {
  return (
    <>
      <ResetGlobalStyle />
      <Styled.Container>
        <h1>COMPONENTES</h1>
        <Button background="#4CAF50" hoverColor="#555555" color="white">
          Button
        </Button>
      </Styled.Container>
    </>
  );
}

export default App;
