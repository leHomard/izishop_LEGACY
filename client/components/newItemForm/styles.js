import { Radio, Form, Upload } from "antd";
import styled, { keyframes } from "styled-components";

const { Item } = Form;

const loading = keyframes`
  from {
    background-posittion: 0 0 
  }
  to {
    background-position: 100% 100%
  }
`;

const FormDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  border-radius: 1rem;

  padding: 2rem 5rem 5rem 5rem;
  box-shadow: var(--box-shadow);
  @media (max-width: 900px) {
    padding: 1rem 1rem 3rem 1rem;
    margin: 0 auto;
    width: 100%;
  }
`;

export const Fieldset = styled.fieldset`
  border: 0;
  margin-bottom: 2rem;
  padding: 0;
  &[disabled] {
    opacity: 0.5;
  }
  &::before {
    height: 10px;
    content: "";
    display: block;
    background-image: linear-gradient(
      to right,
      lightpink 0%,
      #2194ff 50%,
      lightpink 100%
    );
  }
  &[aria-busy="true"]::before {
    background-size: 50% auto;
    animation: ${loading} 0.5s linear infinite;
  }
`;

export const StyledRadio = styled(Radio)`
  display: flex;
  padding-top: 1rem;
  border-bottom: 1px solid #999;
  p {
    font-size: 12px;
    color: ${(props) => props.theme.greytext};
  }
  .ant-radio {
    height: 20px;
    padding-top: 6px;
  }
`;

export const StyledUpload = styled(Upload)`
  .ant-upload {
    border: 1px dashed ${(props) => props.theme.blue};
    background-color: #fafafa;
    width: 370px;
    height: 170px;
    margin: 0 auto;
    display: table;
    cursor: pointer;
  }
  .upload--content {
    display: table-cell;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    text-align: center;
    p {
      margin-top: 10px;
    }
  }
`;

export const StyledItem = styled(Item)`
  display: flex;
  div:first-of-type {
    flex: 1 !important;
  }
  .ant-col ant-form-item-control {
    /* flex: 2 1 auto; */
  }
`;

export default FormDiv;
