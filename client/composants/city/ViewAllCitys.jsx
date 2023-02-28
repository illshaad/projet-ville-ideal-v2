import React, { useState, useMemo } from "react";
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

  const [selected, setSelected] = useState(new Set(["Filtre"]));
  const redirection = () => router.push("/application");

  const increasing = (a, b) => a.totalRating - b.totalRating;
  const decreasing = (a, b) => (a.totalRating > b.totalRating ? -1 : 1);
  const departement = (a, b) =>
    a.nameDepartement.localeCompare(b.nameDepartement);

  const sort = (selected) => {
    let sortFunction;
    switch (selected.currentKey) {
      case "Croissant":
        sortFunction = increasing;
        break;
      case "Decroissant":
        sortFunction = decreasing;
        break;
      case "Departement":
        sortFunction = departement;
        break;
      default:
        return;
    }
    setAverageCity(averageCity?.sort(sortFunction));
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
                selectedKeys={sort(selected)}
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
                {averageCity?.map((city, index) => (
                  <Table.Row key={index}>
                    <Table.Cell> {city._id}</Table.Cell>
                    <Table.Cell>{city.totalRating}</Table.Cell>
                    <Table.Cell> {city.nameDepartement}</Table.Cell>
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
