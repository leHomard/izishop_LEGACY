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
  // pull data that we want for the item object
  const { brand, color, size, type, categories, nbViews, nbInterested } = item;

  return (
    <StyleList>
      <li>
        <div className="item--title">Marque</div>
        <div>{brand}</div>
      </li>
      <li>
        <div className="item--title">ÉTAT</div>
        <div>Neuf</div>
      </li>
      <li>
        <div className="item--title">COULEUR</div>
        <div>{color}</div>
      </li>
      <li>
        <div className="item--title">TAILLE</div>
        <div>{size}</div>
      </li>
      <li>
        <div className="item--title">TYPE</div>
        <div>{type}</div>
      </li>
      <li>
        <div className="item--title">CATÉGORIE</div>
        <div>{categories[0]}</div>
      </li>
      <li>
        <div className="item--title">EMPLACEMENT</div>
        <div>Paris</div>
      </li>
      <li>
        <div className="item--title">NOMBRE DE VUES</div>
        <div>{nbViews}</div>
      </li>
      <li>
        <div className="item--title">INTÉRESSÉ PAR</div>
        <div>{nbInterested}</div>
      </li>
    </StyleList>
  );
};

export default ListItemValue;
