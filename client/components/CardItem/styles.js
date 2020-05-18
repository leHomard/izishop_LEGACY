import styled from "styled-components";

const CardItemContainer = styled.div`
  width: 250px;
  height: 405px;
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
      font-weight: 400;
    }
  }
`;

export const StyledDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default CardItemContainer;
