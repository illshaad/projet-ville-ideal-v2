import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { FlexElementCard, FlexElementInCart } from "../../../styles/global";
import Popover from "../../popover/Popover";
import { useDataCity } from "../../../context/context";
import { Card, Text, Divider, Row, Button, Spacer } from "@nextui-org/react";
import { getInformationRatings } from "../../../service/api";
import StarIcon from "@mui/icons-material/Star";

export default function ViewAllRating({ nextStep }) {
  const { selectCityInfoWindows, setDataInformation, findUserNoteByCity } =
    useDataCity();

  useEffect(() => {
    getInformationRatings().then((res) =>
      setDataInformation(res?.data.ratings)
    );
  }, []);

  const numberIcon = (nombre) => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numberSlice = arr.slice(0, nombre);
    return numberSlice.map((e) => {
      return <StarIcon color="secondary" fontSize="small" />;
    });
  };

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
              Note générale - {e?.totalRating}/5
            </Text>

            <Divider color="primary" />
            <Card.Body>
              <div style={{ textAlign: "center" }}>
                <Text color="#ff4ecd" b>
                  Noter par
                </Text>
                <Text h2>{e.nameUser}</Text>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItem: "flext-start",
                }}
              >
                <div>
                  <FlexElementInCart>
                    <Text>Enseignement</Text>
                    <Text>{numberIcon(e.education)}</Text>
                  </FlexElementInCart>
                  <FlexElementInCart>
                    <Text>Environement</Text>
                    <Text>{numberIcon(e.environement)}</Text>
                  </FlexElementInCart>
                  <FlexElementInCart>
                    <Text>Santé</Text>
                    <Text>{numberIcon(e.health)}</Text>
                  </FlexElementInCart>
                  <FlexElementInCart>
                    <Text>Commerce</Text>
                    <Text>{numberIcon(e.trade)}</Text>
                  </FlexElementInCart>
                  <FlexElementInCart>
                    <Text>Transports</Text>
                    <Text>{numberIcon(e.transports)}</Text>
                  </FlexElementInCart>
                  <FlexElementInCart>
                    <Text>Culture</Text>
                    <Text>{numberIcon(e.culture)}</Text>
                  </FlexElementInCart>
                </div>

                <div>
                  <FlexElementInCart>
                    <Text>Culture</Text>
                    <Text>{numberIcon(e.culture)}</Text>
                  </FlexElementInCart>
                  <FlexElementInCart>
                    <Text>Culture</Text>
                    <Text>{numberIcon(e.culture)}</Text>
                  </FlexElementInCart>
                  <FlexElementInCart>
                    <Text>Securité</Text>
                    <Text>{numberIcon(e.security)}</Text>
                  </FlexElementInCart>
                  <FlexElementInCart>
                    <Text>Sport et Loisir </Text>
                    <Text>{numberIcon(e.sportAndLeasur)}</Text>
                  </FlexElementInCart>
                  <FlexElementInCart>
                    <Text>Qualité de Vie</Text>
                    <Text>{numberIcon(e.qualityOfLife)}</Text>
                  </FlexElementInCart>
                </div>
              </div>
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
