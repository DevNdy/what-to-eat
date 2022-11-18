import styled from "styled-components";
import Footer from "./components/footer/Footer";
import Fridge from "./components/fridge/Fridge";
import Logo from "./ui-reusable/Logo";

function App() {
  return (
    <AppStyled>
      <Logo />
      <section className="bodyApp">
        <Fridge />
      </section>
      <Footer />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  .bodyApp {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export default App;
