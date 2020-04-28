import styled from "styled-components";

const HeroWrapper = styled.section`
  padding: 1rem 0;
  display: flex;
  margin-bottom: 3rem;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  width: 300px;
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }
  h3 {
    margin-bottom: -0.3rem;
    font-size: 28pt;
    color: #212121;
    @media (max-width: 680px) {
      font-size: 22pt;
    }
  }
  p {
    margin-bottom: 1rem;
    font-size: 24pt;
    font-weight: normal;
    color: #707070;
    @media (max-width: 680px) {
      font-size: 18pt;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  @media (max-width: 960px) {
    width: 100%;
  }
  img {
    width: 100%;
    border-radius: 1rem;
  }
`;

export default HeroWrapper;
