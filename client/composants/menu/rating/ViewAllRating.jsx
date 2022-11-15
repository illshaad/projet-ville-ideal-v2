import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import { FlexElementCard, P } from "../../../styles/global";
import Popover from "../../popover/Popover";
import { useDataCity } from "../../../context/context";
import { Card, Text, Divider, Row, Button, Spacer } from "@nextui-org/react";
import { getInformationRatings } from "../../../service/api";

export default function ViewAllRating({ nextStep }) {
  const {
    selectCityInfoWindows,
    dataInformation,
    setDataInformation,
    findUserNoteByCity,
  } = useDataCity();

  useEffect(() => {
    getInformationRatings().then((res) =>
      setDataInformation(res?.data.ratings)
    );
  }, []);

  return (
    <Container>
      <br />
      <FlexElementCard>
        <P fontSize="15px" style={{ fontWeight: "bold" }}>
          {selectCityInfoWindows && selectCityInfoWindows[0]?.nom}
        </P>
        <P fontSize="15px" style={{ fontWeight: "bold" }}>
          {selectCityInfoWindows && selectCityInfoWindows[0]?.departement.nom}
        </P>
      </FlexElementCard>

      {findUserNoteByCity?.map((e) => (
        <>
          <Card hoverable>
            <Card.Header>
              <Text color="secondary">Note moyenne : {e?.totalRating} </Text>
            </Card.Header>
            <Divider color="primary" />
            <Card.Body css={{ py: "$10" }}>
              <Text
                h2
                css={{
                  textAlign: "center",
                }}
              >
                {e.nameUser}
              </Text>
            </Card.Body>
            <Divider color="primary" />
            <Card.Footer>
              <Row justify="center">
                <Button flat color="secondary" size="sm">
                  <Popover
                    size="small"
                    findUserNoteByCity={findUserNoteByCity}
                  />
                </Button>
              </Row>
            </Card.Footer>
          </Card>
          <Spacer y={0.5} />
        </>
      ))}

      {selectCityInfoWindows && (
        <Button
          bordered
          style={{ margin: "0 auto" }}
          color="gradient"
          onClick={() => nextStep(1)}
        >
          Noter la ville
        </Button>
      )}
    </Container>
  );
}
