import { Card } from "antd";
import Link from "next/link";
import PropTypes from "prop-types";

import CardHeader from "./CardHeader";
import CardDescription from "./CardDescription";
import CardItemContainer from "./styles";

const { Meta } = Card;

const CardItem = ({
  username,
  nbInterested,
  price,
  brand,
  size,
  imgUrl,
  loading,
  id,
  small,
}) => {
  return (
    <Link href={`product/[id]`} as={`product/${id}`}>
      <CardItemContainer small={small}>
        <Card
          style={{ height: "100%" }}
          loading={loading}
          title={<CardHeader username={username} nbInterested={nbInterested} />}
          hoverable
          cover={<img alt="image" src={imgUrl} />}
          bodyStyle={{ height: "50px" }}
        >
          <Meta
            title={price + " Dhs"}
            style={{ fontSize: "8px" }}
            description={<CardDescription brand={brand} size={size} />}
          />
        </Card>
      </CardItemContainer>
    </Link>
  );
};

CardItem.propTypes = {
  username: PropTypes.string.isRequired,
  nbInterested: PropTypes.number,
  price: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default CardItem;
