import Gallery from "react-grid-gallery";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledGallery = styled.div`
  margin: 1rem;
  .ReactGridGallery {
    margin: 0rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 300px));
    justify-content: center;
    img {
      object-fit: cover;
    }
  }
  @media (max-width: 1025px) {
  }
`;

const GridGallery = ({ photos }) => {
  let w = window.innerWidth;
  return (
    <StyledGallery>
      <Gallery
        enableImageSelection={false}
        images={photos}
        rowHeight={w <= 400 ? 140 : 300}
      />
    </StyledGallery>
  );
};

GridGallery.propTypes = {
  photos: PropTypes.array.isRequired,
};

export default GridGallery;
