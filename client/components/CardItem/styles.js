import styled from "styled-components";

const CardItemContainer = styled.div`
  width: 250px;
  height: 445px;
  display: table;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  .ant-card {
    border-radius: 3px;
  }
  .ant-card-head {
    padding: 0;
  }
  .ant-card-body {
    padding: 0;
  }
  .ant-card-cover {
    height: 319px;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  .ant-card-meta {
    padding: 10px;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  .user--details {
    .user--name {
      font-size: 14px;
      line-height: 16px;
      color: ${(props) => props.theme.greytext};
      font-weight: 200;
    }
  }
  .likes {
    color: ${(props) => props.theme.greytext};
    font-size: 13px;
    a {
      margin-left: 4px;
    }
  }
`;

export const StyledDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
`;

export const EmptyCardContent = styled.div`
  display: table-cell;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  text-align: center;
  p {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.blue};
  }
  &:hover {
    cursor: pointer;
    background-color: #ececec;
  }
`;

export default CardItemContainer;
