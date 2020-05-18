import { Card } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";

const { Meta } = Card;

const StyledCard = styled(Card)`
  width: 250px;
  height: 405px;
  .ant-card-cover {
    height: 320px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Item = ({ size, description, imgUrl, id, loading }) => {
  return (
    <Link href={`product/[id]`} as={`product/${id}`}>
      <CardContainer>
        <div className="card--header"></div>
        <StyledCard
          loading={loading}
          hoverable
          cover={<img alt="image" src={imgUrl} />}
        >
          <Meta title={size} description={description} />
        </StyledCard>
      </CardContainer>
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
