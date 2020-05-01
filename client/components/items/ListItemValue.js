import styled from "styled-components";

const StyleList = styled.ul`
  padding: 15px 10px 15px;
  margin: 0;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      flex: 1;
    }
    .item--title {
      color: #999;
    }
  }
`;

const ListItemValue = ({ item }) => {
  const filteredItem =
    item &&
    item.filter(
      (i) =>
        i.title !== "description" &&
        i.title !== "__typename" &&
        i.title !== "user" &&
        i.title !== "title" &&
        i.title !== "imagesUrl"
    );

  const itemInfo = filteredItem.reduce(
    (obj, i) => ((obj[i.title] = i.value), obj),
    {}
  );

  return (
    <StyleList>
      <li>
        <div className="item--title">Marque</div>
        <div>{itemInfo.brand}</div>
      </li>
      <li>
        <div className="item--title">ÉTAT</div>
        <div>Neuf</div>
      </li>
      <li>
        <div className="item--title">COULEUR</div>
        <div>{itemInfo.color}</div>
      </li>
      <li>
        <div className="item--title">TAILLE</div>
        <div>{itemInfo.size}</div>
      </li>
      <li>
        <div className="item--title">TYPE</div>
        <div>{itemInfo.type}</div>
      </li>
      <li>
        <div className="item--title">CATÉGORIE</div>
        <div>{itemInfo.categories[0]}</div>
      </li>
      <li>
        <div className="item--title">EMPLACEMENT</div>
        <div>Paris</div>
      </li>
      <li>
        <div className="item--title">NOMBRE DE VUES</div>
        <div>{itemInfo.nbViews}</div>
      </li>
      <li>
        <div className="item--title">INTÉRESSÉ PAR</div>
        <div>{itemInfo.nbInterested}</div>
      </li>
    </StyleList>
  );
};

export default ListItemValue;
