import React, { useMemo } from "react";
import {
  Dropdown,
  Text,
  Container,
  Card,
  Button,
  Table,
} from "@nextui-org/react";
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

      <Container>
        <Card>
          <Card.Header
            css={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button onPress={() => redirection()} size="sm" color="secondary">
              Noter une ville
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
            <Table
              shadow={false}
              color="secondary"
              aria-label="Admin table"
              css={{
                height: "auto",
                minWidth: "100%",
              }}
            >
              <Table.Header>
                <Table.Column>Ville</Table.Column>
                <Table.Column>Note</Table.Column>
                <Table.Column>Départements</Table.Column>
              </Table.Header>
              <Table.Body>
                {averageCity?.map((e, index) => (
                  <Table.Row key={index}>
                    <Table.Cell> {e._id}</Table.Cell>
                    <Table.Cell>{e.totalRating}</Table.Cell>
                    <Table.Cell> {e.nameDepartement}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
