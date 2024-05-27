"use client";
import React, { useState } from "react";
import Link from "next/link";
import iconRed from "../assets/icon.png";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { 
  StyledCheckboxContainer, 
  StyledCheckboxInput, 
  StyledCheckboxText, 
  StyledContainer, 
  StyledForgotPasswordLien, 
  StyledFrm, 
  Form, 
  StyledFrmInput, 
  StyledFrmLabel, 
  StyledIcon, 
  StyledInfo, 
  StyledInput, 
  StyledLogoContainer, 
  StyledSignupLien, 
  StyledSubmitButton, 
  StyledText, 
  ErrorMessage 
} from "../../styles/Connexion.Style";

export default function Connexion() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = values;
  const router = useRouter();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const resetMessage = () => {
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are necessary and terms must be accepted!");
      setTimeout(resetMessage, 5000);
      return;
    }

    try {
      const res = await signIn('credentials', {
        email, 
        password, 
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        setTimeout(resetMessage, 5000);
        return;
      }

      router.replace("/dashboard");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  
  return (
    <>
      <StyledContainer>
        <StyledLogoContainer>
          <StyledIcon>
            <Image src={iconRed} alt="logo Red" />
          </StyledIcon>
          <StyledText>Red Product</StyledText>
        </StyledLogoContainer>
        <Form>
          <StyledFrm onSubmit={handleSubmit}>
            <StyledInfo>Connectez-vous en tant qu'admin</StyledInfo>
            <StyledFrmInput>
              <StyledFrmLabel htmlFor="email">Email</StyledFrmLabel>
              <StyledInput 
                id="email" 
                name="email"
                type="email" 
                value={email}
                onChange={handleChange} 
              />
            </StyledFrmInput>
            <StyledFrmInput>
              <StyledFrmLabel htmlFor="password">Mot de passe</StyledFrmLabel>
              <StyledInput 
                id="password" 
                name="password"
                type="password" 
                value={password}
                onChange={handleChange} 
              />
            </StyledFrmInput>
            {error && (
              <ErrorMessage>{error}</ErrorMessage>
            )}
            <StyledCheckboxContainer>
              <StyledCheckboxInput
                type="checkbox"
                id="coding"
                name="interest"
                value="coding"
              />
              <StyledCheckboxText>Garder-moi connecter</StyledCheckboxText>
            </StyledCheckboxContainer>
            <StyledSubmitButton type="submit">Se connecter</StyledSubmitButton>
          </StyledFrm>
        </Form>
        <Link href="/forgotpwd">
          <StyledForgotPasswordLien>
            Mot de passe oublié?
          </StyledForgotPasswordLien>
        </Link>
        <StyledSignupLien>
          Vous n'avez pas de compte?{" "}
          <Link href="/inscription">Inscription</Link>
        </StyledSignupLien>
      </StyledContainer>
    </>
  );
};

