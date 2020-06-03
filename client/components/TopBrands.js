import { Avatar } from "antd";
import styled from "styled-components";

const StyledTopBrands = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 0 4rem 0;
  @media (max-width: 648px) {
    h3 {
      font-size: medium;
    }
  }
  .top--brands--avatar {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    width: 90%;
    margin: 0 auto;
    @media (max-width: 648px) {
      width: 120%;
      margin-left: -2rem;
    }
    & > * {
      flex: 0 0 auto;
      margin: 0 auto;
    }
  }
`;

const colors = [
  "lightBlue",
  "lightpink",
  "antiquewhite",
  "coral",
  "lavender",
  "yellowgreen",
  "plum",
  "wheat",
];

const TopBrands = () => {
  // for testing purpose
  const brands = [
    "ZARA",
    "TOMMY HILFIGER",
    "PRIMARK",
    "RALPH LAUREN",
    "LEVIS",
    "JOTT",
    "ADIDAS",
    "NIKE",
  ];
  return (
    <StyledTopBrands>
      <h3>Les marques du moment</h3>
      <div className="top--brands--avatar">
        {brands.map((brand, i) => (
          <Avatar
            key={i}
            style={{
              backgroundColor: colors[i],
              color: "black",
              fontSize: "12px",
              marginRight: "1rem",
            }}
            size={124}
          >
            {brand}
          </Avatar>
        ))}
      </div>
    </StyledTopBrands>
  );
};

export default TopBrands;
