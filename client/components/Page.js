import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./header/Header";
import Meta from "./Meta";

const theme = {
  blue: "#2194ff",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#f6f6f6",
  offWhite: "#EDEDED",
  maxWidth: "1000px"
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyles = createGlobalStyle`
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
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;
const Page = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <GlobalStyles />
        <Meta />
        <Header />
        <Inner>{children}</Inner>
      </StyledPage>
    </ThemeProvider>
  );
};

export default Page;
