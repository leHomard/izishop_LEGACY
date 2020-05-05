import { Button } from "antd";
import BtnComp from "../UI/Button";
import { StyledActions } from "./styles";
const ItemInfoCardActions = () => {
  return (
    <StyledActions>
      <Button
        shape="square"
        style={{ backgroundColor: "#fff", color: "#2194ff" }}
      >
        Contacter le vendeur
      </Button>
      <BtnComp type="primary" btnvalue="Acheter" />
      <Button
        shape="square"
        style={{
          backgroundColor: "lightPink",
          color: "white",
        }}
      >
        Ajouter aux favoris
      </Button>
    </StyledActions>
  );
};

export default ItemInfoCardActions;
