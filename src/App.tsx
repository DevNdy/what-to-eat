import styled from "styled-components";
import SectionReceipts from "./components/ receipts/SectionReceipts";
import Footer from "./components/footer/Footer";
import Fridge from "./components/fridge/Fridge";
import { AppContextProvider } from "./context/Context";
import Logo from "./ui-reusable/Logo";

function App() {
  return (
    <AppContextProvider>
      <AppStyled>
        <Logo />
        <section className="bodyApp">
          <Fridge />
          <SectionReceipts />
        </section>
        <Footer />
      </AppStyled>
    </AppContextProvider>
  );
}

const AppStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .bodyApp {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  @media (max-width: 1030px) {
    .bodyApp {
      flex-direction: column;
    }
  }
`;

export default App;
