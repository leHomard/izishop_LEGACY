import Gallery from "react-grid-gallery";
import styled from "styled-components";

const StyledGallery = styled(Gallery)``;

const GridGallery = () => {
  const photos = [
    {
      src:
        "https://www.sneakers.fr/wp-content/uploads/2017/10/adidas-stan-smith-gore-tex-gris-5.jpg",
      thumbnail:
        "https://www.sneakers.fr/wp-content/uploads/2017/10/adidas-stan-smith-gore-tex-gris-5.jpg",
    },
    {
      src:
        "https://www.sneakers.fr/wp-content/uploads/2017/10/adidas-stan-smith-gore-tex-gris-3.jpg",
      thumbnail:
        "https://www.sneakers.fr/wp-content/uploads/2017/10/adidas-stan-smith-gore-tex-gris-3.jpg",
    },
    {
      src:
        "https://www.sneakers.fr/wp-content/uploads/2017/10/adidas-stan-smith-gore-tex-gris-4.jpg",
      thumbnail:
        "https://www.sneakers.fr/wp-content/uploads/2017/10/adidas-stan-smith-gore-tex-gris-4.jpg",
    },
    {
      src:
        "https://www.sneakers.fr/wp-content/uploads/2017/10/adidas-stan-smith-gore-tex-gris-1.jpg",
      thumbnail:
        "https://www.sneakers.fr/wp-content/uploads/2017/10/adidas-stan-smith-gore-tex-gris-1.jpg",
    },
  ];
  return (
    <StyledGallery
      enableImageSelection={false}
      images={photos}
      rowHeight={300}
    />
  );
};

export default GridGallery;
