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

const ListItemValue = ({ obj }) => {
  const filteredObj = obj.filter((o) => o.title !== "Description");
  return (
    <StyleList>
      {filteredObj &&
        filteredObj.map((el) => (
          <li key={el.title}>
            <div className="item--title">{el.title}</div>
            <div>{el.value}</div>
          </li>
        ))}
    </StyleList>
  );
};

export default ListItemValue;
