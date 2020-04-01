import { Card } from "antd";

const { Meta } = Card;

const Item = () => {
  return (
    <Card
      hoverable
      style={{ width: 240, height: 400 }}
      cover={
        <img
          alt="image"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="M" description="Chemise" />
    </Card>
  );
};

export default Item;
