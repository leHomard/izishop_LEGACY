import styled from "styled-components";

export const StyledSearch = styled.div`
  padding: 2em;
  width: 700px;
`;

export const Logo = styled.div`
  width: 150px;
  height: 50px;
  margin: 1em;
  border: 1px solid black;
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 5px solid ${props => props.theme.blue};
    display: flex;
    background-color: ${props => props.theme.lightgrey};
    justify-content: center;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: flex;
    justify-content: center;
  }
`;
export default StyledHeader;
