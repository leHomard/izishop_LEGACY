import { Avatar, Button, Rate } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSection = styled.section`
  width: 90%;
  margin-bottom: 3rem !important;
  height: 130px;
  margin: 0 auto;
  border-radius: 12px;
  background-color: #f2f9fb;
  padding: 1.8rem 3rem;
  .user--info {
    display: flex;
    align-items: center;
    .ant-avatar {
      margin-right: 1rem;
    }
    p {
      margin: 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      line-height: 1.8rem;
      font-size: 1.1rem;
      font-weight: 100;
    }
  }
`;

const ProductUserBar = ({ userName, btnValue, nbFollowers }) => {
  return (
    <StyledSection>
      <div className="user--info">
        <Avatar icon={<UserOutlined />} size={80} />
        <p>
          <a>{userName}</a>
          <Rate disabled allowHalf defaultValue={4.5} />
          <span>{nbFollowers} abonnés</span>
        </p>
        <Button
          style={{
            border: " 1px solid #2194ff",
            backgroundColor: "#fff",
            color: "#2194ff",
          }}
          shape="round"
        >
          {btnValue}
        </Button>
      </div>
    </StyledSection>
  );
};

ProductUserBar.propTypes = {
  userName: PropTypes.string.isRequired,
  btnValue: PropTypes.string.isRequired,
  nbFollowers: PropTypes.number,
};

export default ProductUserBar;
