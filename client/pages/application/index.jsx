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
  FlexContainer,
  FadeInLeftDiv,
} from "../../styles/global";
import AddRating from "../../composants/avis/AddRating";
import Snackbar from "../../composants/snackbar/Snackbar";
import { Text, Button } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Home({ dataIleDeFrance }) {
  const router = useRouter();
  const { response, selectCityInfoWindows, SetselectCityInfoWindows } =
    useDataCity();
  const message = response?.data?.message;
  const status = response?.status;
  const [step, setStep] = useState(0);

  const redirection = () => router.push("/city");
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
      <FadeInLeftDiv>
        <CardHome>
          <FlexContainer justifyContent="space-between" alignItems="center">
            <Button
              auto
              size="xs"
              color="secondary"
              flat
              onClick={() => prevStep()}
            >
              Retour
            </Button>
            <Button auto size="xs" color="secondary" flat>
              Menu principal
            </Button>
            <Search dataIleDeFrance={dataIleDeFrance} />
            <Button
              auto
              size="xs"
              color="secondary"
              flat
              onClick={() => redirection()}
            >
              Vers toutes les villes
            </Button>
            <Text size="$sm" weight="bold">
              <Text color="#ff4ecd" b>
                Bonjour{" "}
              </Text>
              {getName()}
            </Text>
          </FlexContainer>

          <FlexContainerHome>
            {selectCityInfoWindows && <Menu>{stepComponent[step]}</Menu>}
            <Maps dataIleDeFrance={dataIleDeFrance} />
          </FlexContainerHome>
        </CardHome>
      </FadeInLeftDiv>
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
