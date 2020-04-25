import { Fragment } from "react";

import Items from "../components/items/Items";
import Hero from "../components/hero/hero";
import Button from "../components/UI/Button";
import { useFetchUser } from "../hooks/useFetchUser";

const Home = () => {
  const currentUser = useFetchUser();
  return (
    <Fragment>
      {currentUser && !currentUser.data && (
        <Hero
          imgUrl="https://www.savethestudent.org/uploads/sell-clothes-online-2.jpg"
          text="Vends et achete des vetements plus facilement !"
          value="Inscrivez-vous!"
        >
          <h3>Bienvenue sur Detniv !</h3>
          <p>Vendre et acheter plus facilement !</p>
          <Button
            btnValue="Inscrivez vous"
            onClick={() => {}}
            type="primary"
            shape="round"
          />
        </Hero>
      )}
      <Items />
    </Fragment>
  );
};

export default Home;
