import Link from "next/link";
import PropTypes from "prop-types";
import styled from "styled-components";
import { LikeTwoTone } from "@ant-design/icons";

const StyledDiv = styled.div`
  margin: 0 auto;
  padding: 2rem 2rem;
  text-align: center;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      margin: 0;
      padding: 0;
    }
  }
  a {
    color: ${(props) => props.theme.blue};
    font-size: initial;
  }
`;

const FormSuccess = ({ itemId }) => {
  return (
    <StyledDiv>
      <span>
        <h3>Félicitations ! ton article est en ligne</h3>
        <LikeTwoTone style={{ marginLeft: "10px", fontSize: "30px" }} />
      </span>
      <Link href={`product/[id]`} as={`product/${itemId}`}>
        <a>Voir mon article</a>
      </Link>
    </StyledDiv>
  );
};

FormSuccess.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default FormSuccess;
