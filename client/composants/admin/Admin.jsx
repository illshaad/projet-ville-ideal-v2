import React, { useEffect, useState } from "react";
import { Table } from "@nextui-org/react";
import ModalAdmin from "./ModalAdmin";
import { useDataCity } from "../../context/context";

export default function Admin({ dataInformation }) {
  const { setValidedRating } = useDataCity();

  return (
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
        <Table.Column>NOM</Table.Column>
        <Table.Column>EMAIL</Table.Column>
        <Table.Column>STATUS</Table.Column>
        <Table.Column>TRAITEMENT</Table.Column>
      </Table.Header>
      <Table.Body>
        {dataInformation?.map((e, index) => (
          <Table.Row key={index}>
            <Table.Cell>{e.nameUser}</Table.Cell>
            <Table.Cell>shaddlove5@gmail.com</Table.Cell>
            <Table.Cell>Attente</Table.Cell>
            <Table.Cell>
              <ModalAdmin e={e} setValidedRating={setValidedRating} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
