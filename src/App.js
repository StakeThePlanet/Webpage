
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import {Container} from "./components/styles/Container.styled"
import GlobalStyles from "./components/styles/Global";

const theme = {
  
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  }
}

function App() {
  return (
    // <> is called a fragment
    <ThemeProvider theme={theme}>  
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>something goes in here later</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
