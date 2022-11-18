import styled from "styled-components";
import Footer from "./components/footer/Footer";
import Logo from "./ui-reusable/Logo";

function App() {
  return (
    <AppStyled>
      <Logo />
      <Footer />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;
