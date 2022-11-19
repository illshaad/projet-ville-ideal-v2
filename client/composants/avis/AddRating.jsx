import React, { useState } from "react";
import { useDataCity } from "../../context/context";
import { useForm } from "react-hook-form";
import {
  Card,
  Text,
  Divider,
  Button,
  Textarea,
  Container,
} from "@nextui-org/react";

import {
  Form,
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
        status: "pending",
      });
      setResponse(responseToFront);
      prevStep();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Text
        css={{ textAlign: "center ", marginTop: "2rem" }}
        size="$sm"
        weight="bold"
        color="secondary"
      >
        Vous allez noter la ville :{" "}
        <Text b color="#ff4ecd">
          {selectCityInfoWindows[0]?.nom}
        </Text>
      </Text>
      <Text
        css={{ textAlign: "center " }}
        size="$sm"
        weight="bold"
        color="secondary"
      >
        Qui est dans le département :{" "}
        <Text b color="#ff4ecd">
          {selectCityInfoWindows[0]?.departement.nom}
        </Text>
      </Text>

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
            <Card.Header
              css={{
                display: "flex",
                gap: 10,
                justifyContent: "space-between",
              }}
            >
              <Text b color="secondary">
                {[currentIndex][0] + 1} - 9
              </Text>
              <Text b color="secondary">
                {informations[currentIndex]?.titre}
              </Text>
            </Card.Header>
            <Divider />
            <Card.Body css={{ py: "10" }}>
              <Text color="#ff4ecd">{informations[currentIndex]?.info}</Text>
            </Card.Body>
            <Divider />
            <Card.Footer css={{ display: "flex", justifyContent: "center" }}>
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
            </Card.Footer>
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

            <Card>
              <Card.Header
                css={{
                  display: "flex",
                  gap: 10,
                  justifyContent: "space-between",
                }}
              >
                <Text b color="secondary">
                  {[currentIndexCommentaire][0] + 1} - 2
                </Text>
                <Text b color="secondary">
                  {commentaires[currentIndexCommentaire]?.titre}
                </Text>
              </Card.Header>
              <Divider />
              <Card.Body css={{ py: "10" }}>
                <Textarea
                  placeholder="Votre commentaire ici"
                  {...register(commentaires[currentIndexCommentaire].titre)}
                />
              </Card.Body>
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
          <Container css={{ display: "flex", justifyContent: "center" }}>
            <Button bordered color="gradient" type="submit">
              Enregistrer
            </Button>
          </Container>
        )}
      </Form>
    </>
  );
}
