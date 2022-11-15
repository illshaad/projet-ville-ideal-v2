import React, { useEffect, useState } from "react";
import AuthentificationComposant from "../../composants/authentification/AuthentificationComposant";
import { Card } from "@nextui-org/react";
import { useDataCity } from "../../context/context";
import Snackbar from "../../composants/snackbar/Snackbar";
import { createUser, loginUser, redirectionJwt } from "../../service/api";

export default function Authentification() {
  const { response, setResponse } = useDataCity();
  const message = response?.data?.message;
  const status = response?.status;
  const [url, setUrl] = useState();

  useEffect(() => {
    setUrl(window.location.href.split("email=")[1]);
    if (response?.token) {
      const responseToken = redirectionJwt(response.token);
    }
  }, []);

  const onSubmit = async (data) => {
    if (!url) {
      const response = await createUser(data);
      setResponse(response);
    } else {
      const response = await loginUser(data);
      setResponse(response);
    }
  };

  return (
    <>
      <Card
        bordered
        borderWeight={"bold"}
        shadow={false}
        hoverable
        css={{
          borderColor: " #C17CEF",
          margin: "10% auto",
          width: "500px",
          height: "500px",
        }}
      >
        {url ? (
          <AuthentificationComposant
            textWelcome="Connecter"
            textButton="Connection"
            onSubmit={onSubmit}
          />
        ) : (
          <AuthentificationComposant
            textWelcome="inscrire"
            textButton="Inscription"
            onSubmit={onSubmit}
          />
        )}
      </Card>
      {response && <Snackbar message={message} status={status} />}
    </>
  );
}
