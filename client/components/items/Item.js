import { Card } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";

const { Meta } = Card;

const StyledCard = styled(Card)`
  width: 240px;
`;

const Item = ({ size, description, imgUrl, id, loading }) => {
  return (
    <Link href={`product/[id]`} as={`product/${id}`}>
      <StyledCard
        loading={loading}
        hoverable
        cover={<img alt="image" src={imgUrl} />}
      >
        <Meta title={size} description={description} />
      </StyledCard>
    </Link>
  );
};

Item.propTypes = {
  size: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  id: PropTypes.string,
};

Item.defaultProps = {
  id: "0",
};

export default Item;
