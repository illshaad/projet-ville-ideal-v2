import React from "react";
import { Card, Text, Divider, Button, Container } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Selection() {
  const router = useRouter();

  const myRedirection = [
    {
      link: () => router.push(`/application`),
      name: "Noter votre ville",
    },
    {
      link: () => router.push(`/classement`),
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
        <Card.Header>
          <Text b color="secondary">
            Menu
          </Text>
        </Card.Header>
        <Divider />
        {myRedirection.map((redirection, index) => (
          <Card.Body css={{ py: "$20" }} key={index}>
            <Button
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
