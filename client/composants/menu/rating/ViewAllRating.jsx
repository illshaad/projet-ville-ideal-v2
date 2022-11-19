import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import { FlexElementCard, P } from "../../../styles/global";
import Popover from "../../popover/Popover";
import { useDataCity } from "../../../context/context";
import { Card, Text, Divider, Row, Button, Spacer } from "@nextui-org/react";
import { getInformationRatings } from "../../../service/api";
import { display } from "@mui/system";

export default function ViewAllRating({ nextStep }) {
  const { selectCityInfoWindows, setDataInformation, findUserNoteByCity } =
    useDataCity();

  useEffect(() => {
    getInformationRatings().then((res) =>
      setDataInformation(res?.data.ratings)
    );
  }, []);

  return (
    <Container css={{ marginTop: "2rem" }}>
      <FlexElementCard>
        <Text weight="bold">
          {selectCityInfoWindows && selectCityInfoWindows[0]?.nom}
        </Text>
        <Text weight="bold">
          {selectCityInfoWindows && selectCityInfoWindows[0]?.departement.nom}
        </Text>
      </FlexElementCard>

      {findUserNoteByCity?.map((e) => (
        <>
          <Card hoverable>
            <Text
              color="secondary"
              weight="bold"
              css={{ textAlign: "center", padding: "1rem" }}
            >
              Note moyenne - {e?.totalRating}{" "}
            </Text>

            <Divider color="primary" />
            <Card.Body
              css={{
                py: "$10",
              }}
            >
              <Text b color="#ff4ecd">
                Noter par
              </Text>
              <Text h2>{e.nameUser}</Text>
            </Card.Body>
            <Divider color="primary" />
            <Card.Footer>
              <Row justify="center">
                <Button flat color="secondary" size="sm">
                  <Popover size="small" e={e} />
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
