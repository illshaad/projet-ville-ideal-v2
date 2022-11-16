import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Input, Spacer, Button } from "@nextui-org/react";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import { Text } from "@nextui-org/react";
import AuthSocial from "./AuthSocial";
import { FormAuthentification, Perror } from "../../styles/global";

const schema = yup.object().shape({
  pseudo: yup
    .string()
    .required("Le pseudo est requis")
    .min(
      5,
      "Le mots de pseudo est trop court - il doit comporter au moins 5 caractères"
    ),
  email: yup.string().required("L'email est requis"),
  password: yup
    .string()
    .required("Le mots de passe est requis")
    .min(
      5,
      "Le mots de passe est trop court - il doit comporter au moins 5 caractères"
    ),
});

export default function AuthentificationComposant({
  textButton,
  textWelcome,
  onSubmit,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Text h1 size={25} css={{ textAlign: "center" }}>
        Bienvenue veuillez vous {textWelcome}
      </Text>
      <Spacer y={1.5} />
      <FormAuthentification onSubmit={handleSubmit(onSubmit)}>
        {textButton === "Connection" && textWelcome === "Connecter" ? (
          <>
            <Input {...register("email")} placeholder="E-mail" />
            <ErrorMessage errors={errors} name="email" as={Perror} />

            <Input
              {...register("password")}
              placeholder="Mots de passe"
              type="password"
            />
            <ErrorMessage errors={errors} name="password" as={Perror} />
          </>
        ) : (
          <>
            <Input {...register("pseudo")} placeholder="Pseudo" />
            <ErrorMessage errors={errors} name="pseudo" as={Perror} />
            <Spacer y={0.5} />
            <Input {...register("email")} placeholder="E-mail" />
            <ErrorMessage errors={errors} name="email" as={Perror} />
            <Spacer y={0.5} />
            <Input
              {...register("password")}
              placeholder="Mots de passe"
              type="password"
            />
            <ErrorMessage errors={errors} name="password" as={Perror} />
            <Spacer y={0.5} />
          </>
        )}

        <Button bordered color="gradient" auto>
          {textButton}
        </Button>
        {textButton === "Connection" && textWelcome === "Connecter" ? null : (
          <AuthSocial />
        )}
      </FormAuthentification>
    </>
  );
}
