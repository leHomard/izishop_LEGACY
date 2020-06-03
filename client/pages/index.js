import { Fragment } from "react";

import Items from "../components/items/Items";
import Hero from "../components/hero/hero";
import Button from "../components/UI/Button";
import TopBrands from "../components/TopBrands";
import { useFetchUser } from "../hooks/useFetchUser";
import WeekSelection from "../components/homeSections/WeekSelection";
import WomenSelection from "../components/homeSections/WomenSelection";
import MenSelection from "../components/homeSections/MenSelection";
import KidsSelection from "../components/homeSections/KidsSelection";
import HomeSelection from "../components/homeSections/HomeSelection";

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
          <h3>Bienvenue sur izishop !</h3>
          <p>Vendre et acheter plus facilement !</p>
          <Button
            btnvalue="Inscrivez vous"
            onClick={() => {}}
            type="primary"
            shape="round"
          />
        </Hero>
      )}
      <TopBrands />
      <WeekSelection />
      <WomenSelection />
      <MenSelection />
      <KidsSelection />
      <HomeSelection />
      <Items />
    </Fragment>
  );
};

export default Home;
