import React, { useMemo } from "react";
import { Dropdown, Text, Container, Card, Button } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function ViewAllCitys({ averageCity, setAverageCity }) {
  const router = useRouter();

  const [selected, setSelected] = React.useState(new Set(["Filtre"]));
  const redirection = () => router.push("/application");

  const increasing = (a, b) => a.totalRating - b.totalRating;
  const decreasing = (a, b) => (a.totalRating > b.totalRating ? -1 : 1);
  const departement = (a, b) =>
    a.nameDepartement.localeCompare(b.nameDepartement);

  const sortedByIncreasing = () => {
    setAverageCity(averageCity?.sort(increasing));
  };

  const sortedByDecreasing = () => {
    setAverageCity(averageCity?.sort(decreasing));
  };

  const sortedByDepartement = () => {
    setAverageCity(averageCity?.sort(departement));
  };

  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <>
      <Text
        size={60}
        css={{
          textAlign: "center",
        }}
        weight="bold"
      >
        Top ville !
      </Text>

      <Container sm>
        <Card>
          <Card.Header
            css={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button onPress={() => redirection()} size="sm" color="secondary">
              Retour
            </Button>
            <Dropdown>
              <Dropdown.Button flat size="sm" color="secondary">
                {selectedValue}
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Single selection actions"
                color="secondary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={
                  selected.currentKey === "Departement"
                    ? sortedByDepartement()
                    : selected.currentKey === "Croissant"
                    ? sortedByIncreasing()
                    : sortedByDecreasing()
                }
                onSelectionChange={setSelected}
              >
                <Dropdown.Item key="Croissant">Croissant</Dropdown.Item>
                <Dropdown.Item key="Decroissant">Décroissant</Dropdown.Item>
                <Dropdown.Item key="Departement">Département</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Header>
          <Card.Body>
            {averageCity?.map((e) => (
              <div
                style={{ display: "flex", justifyContent: "center", gap: 10 }}
              >
                <Text size={20} weight="bold">
                  {e._id}
                </Text>
                <Text size={20} weight="bold" color="#ff4ecd">
                  {e.totalRating}
                </Text>
              </div>
            ))}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
