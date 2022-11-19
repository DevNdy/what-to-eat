import styled from "styled-components";
import { theme } from "../../theme/theme";

const Footer = () => {
  return (
    <FooterStyled>
      <span>React & Ts</span>
      <div>
        <a href="https://github.com/DevNdy" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github iGitHub"></i>
        </a>
        <a href="https://linkedin.com/in/kévin-naudy-b18a9b249" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin iLinkdin"></i>
        </a>
        <a
          href={`https://twitter.com/dev_ndy?t=BJsZoZ5vebP6gCCpW9zn7A&s=09`}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-twitter iTwitter"></i>
        </a>
      </div>
      <p>@DevNdy</p>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 40px;
  background-color: ${theme.colors.primaryColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    color: white;
    margin-right: 50px;
    font-style: italic;
  }

  i {
    color: white;
    font-size: 25px;
    margin-left: 20px;
    transition: 0.4s;
    &:hover {
      color: black;
    }
  }

  span {
    margin-left: 50px;
    color: white;
    font-weight: 600;
  }

  @media (max-width: 750px) {
    right: 0;
    left: 0;
    p {
      margin-right: 10px;
      font-size: 13px;
    }

    i {
      font-size: 18px;
      margin-left: 12px;
    }

    span {
      margin-left: 10px;
      font-weight: 400;
      font-size: 13px;
    }
  }
`;

export default Footer;
