import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { StyledContainer } from './components/styles/Container.styled';
import { GlobalStyles } from './components/styles/Global';


function App() {
  return (
    <>
    <GlobalStyles />
      <StyledContainer>
        <Header />
        <Main />
        <Footer />
      </StyledContainer>
    </>
  );
}

export default App;
