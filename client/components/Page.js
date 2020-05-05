import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./header/Header";
import Meta from "./Meta";
import SubNav from "./nav/SubNav";

const theme = {
  blue: "#2194ff",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#f6f6f6",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  greytext: "#999",
};

const StyledPage = styled.div`
  height: 100vh;
  background: #ffffff;
  color: ${(props) => props.theme.black};
`;

const Inner = styled.div`
  width: 80%;
  margin: 10rem auto;
`;

const GlobalStyles = createGlobalStyle`
  :root {
    --box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  html {
    box-sizing: border-box;
    font-size: 14px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.black};
  }
`;
const Page = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <GlobalStyles />
        <Meta />
        <Header />
        <SubNav />
        <Inner>{children}</Inner>
      </StyledPage>
    </ThemeProvider>
  );
};

export default Page;
