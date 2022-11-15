import React, { useState } from "react";
import { Header, H1 } from "../../styles/global";

export default function Hearder() {
  const getName = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("name");
    }
  };

  return (
    <Header>
      <H1>Bonjour {getName()}</H1>
    </Header>
  );
}
