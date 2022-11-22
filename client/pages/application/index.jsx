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
  GreyArrowLeft,
  FlexContainer,
} from "../../styles/global";
import AddRating from "../../composants/avis/AddRating";
import Snackbar from "../../composants/snackbar/Snackbar";
import { Text, Button } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Home({ dataIleDeFrance }) {
  const router = useRouter();
  const { response } = useDataCity();
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
      <CardHome>
        <FlexContainerHome>
          <Menu>
            <>
              <FlexContainer>
                <GreyArrowLeft onClick={() => prevStep()}>
                  {" "}
                  &lt; Retour
                </GreyArrowLeft>
                <Button auto size="xs" color="secondary" flat>
                  Menu principal
                </Button>
                <GreyArrowLeft onClick={() => redirection()}>
                  {" "}
                  Vers toutes les villes &gt;
                </GreyArrowLeft>
              </FlexContainer>
              <Text
                css={{ textAlign: "center", margin: "2rem" }}
                size="$md"
                weight="bold"
              >
                <Text color="#ff4ecd" b>
                  Bonjour{" "}
                </Text>
                {getName()}
              </Text>
              <Search dataIleDeFrance={dataIleDeFrance} />
              {stepComponent[step]}{" "}
            </>
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
