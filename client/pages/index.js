import { Fragment } from "react";

import Items from "../components/items/Items";
import Hero from "../components/hero/hero";
import TopBrands from "../components/TopBrands";
import { useFetchUser } from "../hooks/useFetchUser";
import WeekSelection from "../components/itemsSections/WeekSelection";
import WomenSelection from "../components/itemsSections/WomenSelection";
import MenSelection from "../components/itemsSections/MenSelection";
import KidsSelection from "../components/itemsSections/KidsSelection";
import HomeSelection from "../components/itemsSections/HomeSelection";

const Home = () => {
  const currentUser = useFetchUser();
  return (
    <Fragment>
      {/* {!currentUser && !currentUser.data && ( */}
      { !currentUser && (
        <Hero
          imgUrl="https://www.savethestudent.org/uploads/sell-clothes-online-2.jpg"
          text="Vends et achete des vetements plus facilement !"
          value="Inscrivez-vous!"
        >
          <h3>
            Vendre et acheter plus facilement
            <br /> sur Izishop !
            <br />
          </h3>
          {/* <p>L'application mobile est disponile sur :</p> */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img style={{ width: "150px" }} src="../static/appstore.png" />
            <img
              style={{ width: "150px", height: "64.34px" }}
              src="../static/googleplay.png"
            />
          </div>
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
