import React, { useState } from "react";
import { Card, Text, Divider, Button, Container } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Selection() {
  const router = useRouter();

  const name = localStorage.getItem("name");

  const myRedirection = [
    {
      link: () => router.push(`/application`),
      name: "Noter votre ville",
    },
    {
      link: () => router.push(`/city`),
      name: "Classements des villes",
    },
    {
      link: () => router.push(`/admin`),
      name: "Admin",
    },
  ];

  return (
    <Container xs css={{ marginTop: "20%" }}>
      <Card>
        <Text
          weight="bold"
          color="secondary"
          css={{ textAlign: "center", padding: "1rem" }}
        >
          Menu
        </Text>

        <Divider />
        {myRedirection.map((redirection, index) => (
          <Card.Body key={index}>
            <Button
              disabled={!name === "Shadd Love" ? index === 2 && true : false}
              onClick={redirection.link}
              shadow
              color="gradient"
              size="sm"
            >
              {redirection.name}
            </Button>
          </Card.Body>
        ))}
      </Card>
    </Container>
  );
}
