import React, { useState } from "react";
import Maps from "../../composants/map/Maps";
import { getDataIleDeFrance } from "../../service/api";
import { useDataCity } from "../../context/context";
import Hearder from "../../composants/header/Hearder";
import Search from "../../composants/search/Search";
import ViewAllRating from "../../composants/menu/rating/ViewAllRating";
import { CardHome, Menu, FlexContainerHome } from "../../styles/global";
import AddRating from "../../composants/avis/AddRating";
import Snackbar from "../../composants/snackbar/Snackbar";

export default function Home({ dataIleDeFrance }) {
  const { response } = useDataCity();
  const message = response?.data?.message;
  const status = response?.status;
  const [step, setStep] = useState(0);

  // Si il y'a la donnée du back il faut afficher dans le composant ViewAllRating

  const nextStep = (step, data) => {
    setStep(step, data);
  };
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const stepComponent = [
    <ViewAllRating nextStep={nextStep} />,
    <AddRating prevStep={prevStep} />,
  ];

  return (
    <>
      <CardHome>
        <Hearder />
        <FlexContainerHome>
          <Menu>
            <Search dataIleDeFrance={dataIleDeFrance} />
            {stepComponent[step]}
          </Menu>
          <Maps dataIleDeFrance={dataIleDeFrance} />
        </FlexContainerHome>
      </CardHome>
      {response && <Snackbar message={message} status={status} />}
    </>
  );
}

export async function getStaticProps() {
  const dataIleDeFrance = await getDataIleDeFrance();
  return {
    props: {
      dataIleDeFrance,
    },
  };
}
