import React, { useState } from "react";
import Maps from "../../composants/map/Maps";
import { getDataIleDeFrance } from "../../service/api";
import { useDataCity } from "../../context/context";
import Search from "../../composants/search/Search";
import ViewAllRating from "../../composants/menu/rating/ViewAllRating";
import {
  CardHome,
  Menu,
  FlexContainerHome,
  H1,
  GreyArrowLeft,
} from "../../styles/global";
import AddRating from "../../composants/avis/AddRating";
import Snackbar from "../../composants/snackbar/Snackbar";
import { Text } from "@nextui-org/react";

export default function Home({ dataIleDeFrance }) {
  const { response } = useDataCity();
  const message = response?.data?.message;
  const status = response?.status;
  const [step, setStep] = useState(0);

  const nextStep = (step, data) => {
    setStep(step, data);
  };
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const stepComponent = [
    <ViewAllRating key="0" nextStep={nextStep} />,
    <AddRating key="1" prevStep={prevStep} />,
  ];

  const getName = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("name");
    }
  };

  return (
    <>
      <CardHome>
        <FlexContainerHome>
          <Menu>
            <br />
            <GreyArrowLeft onClick={() => prevStep()}>
              {" "}
              &lt; Retour
            </GreyArrowLeft>
            <Text
              css={{ textAlign: " center", margin: "2rem" }}
              size="$md"
              weight="bold"
            >
              <Text color="#ff4ecd" b>
                Bonjour
              </Text>
              {getName()}
            </Text>
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
