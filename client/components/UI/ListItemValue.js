import styled from "styled-components";

// the styles are scoped here in case of this
// list becomes reusable elsewhere
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

const ListItemValue = ({ obj }) => {
  return (
    <StyleList>
      {obj.map((el) => (
        <li key={el.title}>
          <div className="item--title">{el.title}</div>
          <div>{el.title === "MARQUE" ? <a>{el.value}</a> : el.value}</div>
        </li>
      ))}
    </StyleList>
  );
};

export default ListItemValue;
