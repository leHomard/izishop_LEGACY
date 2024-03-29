import { Form } from "antd";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  background-color: ${(props) => props.theme.lightgrey};
  margin: 0 auto;
  max-width: 500px;
  height: 300px;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);
  display: grid;
  justify-content: center;
  h2 {
    padding-top: 2rem;
    margin: 0;
    text-align: center;
  }
  a {
    float: right;
    font-size: 12px;
  }
  button {
    width: 300px;
  }
  .btn {
    margin-top: 1rem;
  }
  .inputs {
    margin-bottom: 0;
  }
  .links {
    display: flex;
    justify-content: space-between;
    margin-top: -2em;
    font-size: 12px;
  }
  .checkbox {
    font-size: 12px;
    margin-bottom: 2px;
  }
`;
