import React from "react";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { useRouter } from "next/router";

export default function AuthSocial() {
  const router = useRouter();

  const response = async (response) => {
    localStorage.setItem("name", response.profileObj.name);
    setTimeout(() => {
      if (response) router.push(`/application`);
    }, 2000);
  };

  return (
    <>
      <GoogleLogin
        className="btnSocial"
        clientId={process.env.NEXT_PUBLIC_AUTH_GOOGLE}
        buttonText="Connection Google"
        onSuccess={response}
        onFailure={response}
        cookiePolicy="single_host_origin"
        icon={false}
        //   isSignedIn={true}
      />
      <FacebookLogin
        appId={process.env.NEXT_PUBLIC_AUTH_FACEBOOK}
        fields="name,email,picture"
        cssClass="btnSocial"
        callback={response}
        textButton="Connection Facebook"
      />
    </>
  );
}
