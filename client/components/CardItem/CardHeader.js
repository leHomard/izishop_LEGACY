import { Card, Avatar } from "antd";
import { UserOutlined, HeartOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import { HeaderDiv } from "./styles";

const CardHeader = ({ username, nbInterested }) => {
  return (
    <HeaderDiv>
      <div className="user--details">
        <Avatar
          style={{ marginRight: "5px" }}
          size="small"
          icon={<UserOutlined />}
        />
        <span className="user--name">omar</span>
      </div>
      <span>
        <a>
          <HeartOutlined />
        </a>
        {nbInterested}
      </span>
    </HeaderDiv>
  );
};

Card.propTypes = {
  username: PropTypes.string.isRequired,
  nbInterested: PropTypes.number,
};

export default CardHeader;
