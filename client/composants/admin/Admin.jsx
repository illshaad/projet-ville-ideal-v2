import React, { useState } from "react";
import { Table } from "@nextui-org/react";
import { Modal, Button } from "@nextui-org/react";
import ModalAdmin from "./ModalAdmin";

export default function Admin({ dataInformation }) {
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
              <ModalAdmin e={e} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
