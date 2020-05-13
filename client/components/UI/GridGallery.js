import Gallery from "react-grid-gallery";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledGallery = styled.div`
  margin: 1rem;
  .ReactGridGallery {
    margin: 0rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(120px, 260px));
    justify-content: center;
    @media (max-width: 600px) {
      grid-template-columns: repeat(2, minmax(120px, 260px));
    }
    img {
      object-fit: cover;
    }
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
