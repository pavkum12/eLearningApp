import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="./assets/hero.mp4" autoPlay muted />
      <Container>
        <MainHeading>Your data is secure with us</MainHeading>
        <HeroText>
          We provide the best security systems for clients all over the world
        </HeroText>
        <ButtonWrapper>
          <Link to="/Login">
            <Button>Get Started</Button>
          </Link>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
