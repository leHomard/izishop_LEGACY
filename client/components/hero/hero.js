import PropTypes from "prop-types";
import HeroWrapper, { Details, Thumbnail } from "./styles";

const Hero = ({ imgUrl, children }) => {
  return (
    <HeroWrapper>
      <Details>{children}</Details>
      <Thumbnail>
        <img alt="Welcome" src={imgUrl} />
      </Thumbnail>
    </HeroWrapper>
  );
};

Hero.prototype = {
  text: PropTypes.string.isRequired,
};

export default Hero;
