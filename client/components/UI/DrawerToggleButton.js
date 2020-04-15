import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 36px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  margin-top: 1rem;
  margin-right: 1rem;
  *:focus {
    outline: none;
  }
  @media (min-width: 1025px) {
    display: none;
  }
`;

const ButtonLine = styled.div`
  width: 30px;
  height: 2px;
  background: ${(props) => props.theme.blue};
`;

const DrawerToggleButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <ButtonLine />
      <ButtonLine />
      <ButtonLine />
    </StyledButton>
  );
};

export default DrawerToggleButton;
