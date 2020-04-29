import Gallery from "react-grid-gallery";
import styled from "styled-components";

const StyledGallery = styled.div`
  margin: 1rem;
  .ReactGridGallery {
    margin: 0rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 300px));
  }
`;

const GridGallery = () => {
  const photos = [
    {
      src:
        "https://www.sneakers.fr/wp-content/uploads/2017/10/adidas-stan-smith-gore-tex-gris-5.jpg",
      thumbnail:
        "https://www.sneakers.fr/wp-content/uploads/2017/10/adidas-stan-smith-gore-tex-gris-5.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 320,
    },
    {
      src:
        "https://www.sneakers.fr/wp-content/uploads/2017/10/adidas-stan-smith-gore-tex-gris-3.jpg",
      thumbnail:
        "https://www.sneakers.fr/wp-content/uploads/2017/10/adidas-stan-smith-gore-tex-gris-3.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 320,
    },
    {
      src:
        "https://www.sneakers.fr/wp-content/uploads/2017/10/adidas-stan-smith-gore-tex-gris-4.jpg",
      thumbnail:
        "https://www.sneakers.fr/wp-content/uploads/2017/10/adidas-stan-smith-gore-tex-gris-4.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 320,
    },
    {
      src:
        "https://www.sneakers.fr/wp-content/uploads/2017/10/adidas-stan-smith-gore-tex-gris-1.jpg",
      thumbnail:
        "https://www.sneakers.fr/wp-content/uploads/2017/10/adidas-stan-smith-gore-tex-gris-1.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 320,
    },
  ];
  return (
    <StyledGallery>
      <Gallery enableImageSelection={false} images={photos} rowHeight={300} />
    </StyledGallery>
  );
};

export default GridGallery;
