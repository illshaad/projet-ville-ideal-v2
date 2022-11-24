import { Container, Divider } from "@mui/material";
import React, { useEffect } from "react";
import { FlexElementCard, FlexElementInCart } from "../../../styles/global";
import Popover from "../../popover/Popover";
import { useDataCity } from "../../../context/context";
import { Card, Text, Row, Button, Spacer } from "@nextui-org/react";
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

  const numberIcon = (nombre, isTotalRating) => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numberSlice = arr.slice(0, nombre);
    return numberSlice.map((e) => {
      return isTotalRating ? (
        <StarIcon fontSize="medium" sx={{ color: "#ff4ecd" }} />
      ) : (
        <StarIcon color="secondary" fontSize="small" />
      );
    });
  };

  return (
    <Container
      css={{
        marginTop: "2rem",
      }}
    >
      <FlexElementCard>
        <Text color="#ff4ecd" weight="bold" size={22}>
          {selectCityInfoWindows && selectCityInfoWindows[0]?.nom}
        </Text>
        <Text weight="bold" size={22}>
          {selectCityInfoWindows && selectCityInfoWindows[0]?.departement.nom}
        </Text>
      </FlexElementCard>

      {findUserNoteByCity?.map((e) => (
        <div>
          <Card hoverable>
            <div
              style={{
                padding: "1rem",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Button disabled={true} size="sm">
                Note Globale
              </Button>
              <div>{numberIcon(e?.totalRating, true)}</div>
            </div>
            <Divider />
            <Card.Body>
              <div
                style={{
                  display: "flex",
                  position: "absolute",
                  bottom: "10px",
                  right: "15px",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Text color="#ff4ecd" b size={12}>
                  Noter par
                </Text>

                <Text size={12} b>
                  {e.nameUser}
                </Text>
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

            <Card.Footer css={{ backgroundColor: "#6851BD" }}>
              <Row justify="center">
                <Button flat color="secondary" size="sm">
                  <Popover size="small" e={e} />
                </Button>
              </Row>
            </Card.Footer>
          </Card>
          <Spacer y={0.5} />
        </div>
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
