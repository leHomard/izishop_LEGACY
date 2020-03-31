import styled from "styled-components";

const NavStyles = styled.ul`
  display: flex;
  justify-self: start;
  font-size: 1rem;
  a,
  button {
    padding: 1rem 1rem;
    display: flex;
    align-items: flex-end;
    position: relative;
    font-weight: 550;
    font-size: 1em;
    border: 0;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    font-size: 10px;
    padding: 0 10px;
  }
  @media (max-width: 1300px) {
    border-top: 1px solid ${props => props.theme.lightgrey};
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default NavStyles;
