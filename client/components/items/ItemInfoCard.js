import { StyledCard } from "./styles";
import Button from "../UI/Button";
import ItemInfoHeader from "./ItemInfoHeader";
import ItemInfoProperties from "./ItemInfoProperties";
import ItemInfoCardActions from "./ItemInfoCardActions";

const item1 = [
  { title: "Marque", value: "Adidas" },
  { title: "Prix", value: "80" },
  {
    title: "Description",
    value: "Adidas Stan Smith neuves",
  },
  { title: "Tailles", value: 42 },
  { title: "Couleur", value: "Blanc et Vert" },
  { title: "Type", value: "Baskets" },
  { title: "Condition", value: "neuf" },
  { title: "Catégorie", value: "hommes" },
  { title: "Location", value: "Paris" },
];

export const ItemInfoCard = () => {
  return (
    <StyledCard>
      <ItemInfoHeader userName="Lobster.h" publishedAt="2 jours" />
      <hr />
      <ItemInfoProperties item={item1} />
      <hr />
      <ItemInfoCardActions />
    </StyledCard>
  );
};

export default ItemInfoCard;
