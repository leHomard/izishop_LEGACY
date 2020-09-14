import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { StyledInfoHeader } from "./styles";

const ItemInfoHeader = ({ publishedAt, username }) => {
  return (
    <StyledInfoHeader>
      <Avatar size="large" shape="circle" icon={<UserOutlined />} />
      <span className="header--meta--info">
        <h3>{username}</h3>
        <p>Ajouté il y a {publishedAt}</p>
      </span>
    </StyledInfoHeader>
  );
};

ItemInfoHeader.propTypes = {
  publishedAt: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
export default ItemInfoHeader;
