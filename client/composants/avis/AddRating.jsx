import React, { useState } from "react";
import { useDataCity } from "../../context/context";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  Form,
  ContainerSelect,
  P,
  Textarea,
  GreyArrowLeft,
  GreyArrowRight,
  PinkArrowLeft,
  PinkArrowRight,
  FlexContainer,
  Select,
} from "../../styles/global";
import { createRating } from "../../service/api";
import informations from "./informations.json";
import commentaires from "./commentaires.json";
import moment from "moment";

export default function AddRatingComposant({ prevStep }) {
  const { setResponse, selectCityInfoWindows } = useDataCity();
  const { handleSubmit, register, watch } = useForm({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexCommentaire, setCurrentIndexCommentaire] = useState(0);
  const remarkPositive = watch(commentaires[0].titre);
  const remarkNegative = watch(commentaires[1].titre);
  const quality = watch(informations[8].name);

  const onSubmit = async (data) => {
    try {
      const responseToFront = await createRating({
        nameUser: localStorage.getItem("name"),
        date: moment().format("L"),
        nameCity: selectCityInfoWindows[0]?.nom || null,
        nameDepartement: selectCityInfoWindows[0]?.departement.nom || null,
        environement: data?.environement || null,
        transports: data?.transports || null,
        security: data?.security || null,
        health: data?.health || null,
        sportAndLeasur: data?.sportAndLeasur || null,
        culture: data?.culture || null,
        trade: data?.trade || null,
        education: data?.education || null,
        remarkPositive: remarkPositive || null,
        remarkNegative: remarkNegative || null,
        qualityOfLife: data?.qualityOfLife || null,
      });
      setResponse(responseToFront);
      prevStep();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <GreyArrowLeft onClick={() => prevStep()}> &lt; </GreyArrowLeft>
      <P>Vous allez noté la ville : {selectCityInfoWindows[0]?.nom} </P>
      <P>
        Qui est dans le département :{" "}
        {selectCityInfoWindows[0]?.departement.nom}
      </P>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FlexContainer>
          {currentIndex > 0 ? (
            <PinkArrowLeft onClick={() => setCurrentIndex(currentIndex - 1)}>
              &lt;
            </PinkArrowLeft>
          ) : (
            <GreyArrowLeft> &lt;</GreyArrowLeft>
          )}
          <Card>
            <P>{[currentIndex][0] + 1} / 9</P>
            <P color="#3197d4">{informations[currentIndex]?.titre}</P>
            <ContainerSelect>
              <P textAlign="justify" fontSize="15px">
                {informations[currentIndex]?.info}
              </P>
            </ContainerSelect>
            <Select
              name={informations[currentIndex].name}
              {...register(informations[currentIndex].name)}
            >
              {informations[currentIndex].value.map((information, index) => (
                <option key={`${index}-${information}`} value={information}>
                  {information}
                </option>
              ))}
            </Select>
          </Card>
          {currentIndex !== informations.length - 1 ? (
            <PinkArrowRight onClick={() => setCurrentIndex(currentIndex + 1)}>
              &gt;
            </PinkArrowRight>
          ) : (
            <GreyArrowRight> &gt; </GreyArrowRight>
          )}
        </FlexContainer>
        {quality && (
          <FlexContainer>
            {currentIndexCommentaire > 0 ? (
              <PinkArrowLeft
                onClick={() =>
                  setCurrentIndexCommentaire(currentIndexCommentaire - 1)
                }
              >
                &lt;
              </PinkArrowLeft>
            ) : (
              <GreyArrowLeft> &lt;</GreyArrowLeft>
            )}
            <Card padding="0px 5px ">
              <P>{[currentIndexCommentaire][0] + 1} / 2</P>
              <P color="#3197d4">
                {commentaires[currentIndexCommentaire].titre}
              </P>
              <Textarea
                placeholder="Noter ici votre commentaire"
                {...register(commentaires[currentIndexCommentaire].titre)}
              />
            </Card>
            {currentIndexCommentaire !== commentaires.length - 1 ? (
              <PinkArrowRight
                onClick={() => {
                  setCurrentIndexCommentaire(currentIndexCommentaire + 1);
                }}
              >
                &gt;
              </PinkArrowRight>
            ) : (
              <GreyArrowRight> &gt; </GreyArrowRight>
            )}
          </FlexContainer>
        )}

        {remarkPositive && remarkNegative && (
          <Button bordered color="secondary" type="submit" auto>
            Enregistrer
          </Button>
        )}
      </Form>
    </>
  );
}
